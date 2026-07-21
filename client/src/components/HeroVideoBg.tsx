// components/HeroVideoBg.tsx
import type { FC } from "react";

interface HeroVideoBgProps {
  src?: string;
  overlayOpacity?: number;
}

const HeroVideoBg: FC<HeroVideoBgProps> = ({
  src = "/scene.mp4",
  overlayOpacity = 40,
}) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* optional dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />
    </div>
  );
};

export default HeroVideoBg;
