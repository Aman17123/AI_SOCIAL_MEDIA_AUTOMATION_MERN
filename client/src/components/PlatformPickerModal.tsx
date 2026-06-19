import { XIcon } from "lucide-react";


interface platformPickerModalProps{
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void; 
  onConnect: (platformId: string) => void;
}


const PlatformPickerModal = ({ connectedIds, connecting , onClose , onConnect} : platformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100">
          {/* header */}
            <div className="flex item-center justify-between px-6 py-4 shadow">
              <h3 className="text-slate-700"> Choose a Platform</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                <XIcon className="size-4"/>
              </button>
            </div>


      {/* Platform List */}
      <div className="p-6 flex flex-col gap-2">
        {PLATFORMS.map((p) => {
          const isConnected = connectedIds.includes(p.id);
          const isConnecting = connecting === p.id;

          return (
            <button>
              {/* Icon */}
              <div className="p-2">
                <p.icon
                  className={`size-5 ${
                    isConnected ? "text-red-600" : "text-slate-500"
                  }`}
                />
              </div>

              {/* Label */}
            </button>
          );
        })}
      </div>
      </div>

    </div>
  )
}

export default PlatformPickerModal