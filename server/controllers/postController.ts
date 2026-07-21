import { AuthRequest } from "../middlewares/authMiddleware.js";
import { GoogleGenAI } from "@google/genai";
import { Response } from "express";
import { Post } from "../models/Post.js";
import { cloudinary } from "../config/cloudinary.js";
import { Generation } from "../models/Generation.js";

//! Generte post
//! POST /api/posts/generate

export const generatePost = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { prompt, tone, generateImage } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      res.status(400).json({
        message:
          "Gemini API key is missing. Please add it to your server/.env file.",
      });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });

    // Generate text
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        Generate a social media post based on this prompt: "${prompt}".
        Tone: ${tone}.
        Include relevant hashtags.

        Return valid JSON using exactly this structure:
        {
          "content": "The generated social media post",
          "imagePrompt": "A highly descriptive image-generation prompt"
        }

        The imagePrompt should describe an image that complements the post.
      `,
    });

    let content = "";
    let imagePrompt = prompt;

    try {
      const rawText = response.text || "";
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);

      const data = jsonMatch
        ? JSON.parse(jsonMatch[0])
        : {
            content: rawText,
            imagePrompt: prompt,
          };

      content = data.content || rawText;
      imagePrompt = data.imagePrompt || prompt;
    } catch (error) {
      content = response.text || "";
    }

    let mediaUrl = "";

    if (generateImage) {
      try {
        // Use Gemini's native image generation model ("Nano Banana").
        // It returns image bytes inline (base64) inside the response parts,
        // so there's no polling/job-status step like Leonardo required.
        const imageResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash-image",
          contents: imagePrompt,
        });

        const parts = imageResponse.candidates?.[0]?.content?.parts || [];
        const imagePart = parts.find((part) => part.inlineData);

        if (!imagePart?.inlineData?.data) {
          throw new Error("Gemini did not return any image data.");
        }

        const mimeType = imagePart.inlineData.mimeType || "image/png";
        const base64Image = imagePart.inlineData.data;

        // Cloudinary accepts a base64 data URI directly, so we can upload
        // straight from memory without ever writing a temp file to disk.
        const uploadResult = await cloudinary.uploader.upload(
          `data:${mimeType};base64,${base64Image}`,
          { folder: "ai-generations" },
        );

        mediaUrl = uploadResult.secure_url;
      } catch (error: any) {
        console.error(
          "Image generation failed:",
          error?.response?.data || error?.message || error,
        );
      }
    }

    // Save generation to database
    const generation = await Generation.create({
      user: req.user._id,
      prompt,
      content,
      mediaUrl,
      mediaType: mediaUrl ? "image" : undefined,
      tone,
    });

    res.status(201).json(generation);
  } catch (error: any) {
    res.status(500).json({
      message: error?.message || "Server error",
    });
  }
};

//! Get generation
//! GET /api/posts/generations
export const getGenerations = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const {} = req.body;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error?.message || "Failed to generate post" });
  }
};

//get post
//! GET /api/posts
export const getPosts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const {} = req.body;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error?.message || "Failed to generate post" });
  }
};

//Schedule post
//POST /api/posts
export const schedulePost = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { content, platforms, scheduledFor, status } = req.body;

    // Parse platforms if it comes as a stringified array from FormData
    let parsedPlatforms = platforms;

    if (typeof platforms === "string") {
      try {
        parsedPlatforms = JSON.parse(platforms);
      } catch (error) {
        parsedPlatforms = platforms.split(",");
      }
    }

    let mediaUrl: string | undefined = req.body.mediaUrl;
    let mediaType: "image" | "video" | undefined = req.body.mediaType;

    if (req.file) {
      const result = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto",
            folder: "social-scheduler",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          },
        );

        stream.end(req.file.buffer);
      });

      mediaUrl = result.secure_url;
      mediaType = result.resource_type === "video" ? "video" : "image";
    }

    const post = await Post.create({
      user: req.user._id,
      content,
      platforms: parsedPlatforms,
      mediaUrl,
      mediaType,
      scheduledFor,
      status,
    });

    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({
      message: error?.message || "Server error",
    });
  }
};
