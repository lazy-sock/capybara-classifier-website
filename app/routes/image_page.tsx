import { useParams } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export default function ImagePage() {
  const { id } = useParams(); // e.g. 'bird123'

  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <img className="rounded-xl" src={`/images/${id}.jpg`} alt={id} />
        <div className="flex gap-4">
          <button className="bg-secondary cursor-pointer rounded-lg px-2 py-1 text-[1.2rem]">
            Download
          </button>
          <button className="bg-secondary cursor-pointer rounded-lg px-2 py-1 text-[1.2rem]">
            Upscale
          </button>
          <button className="bg-secondary cursor-pointer rounded-lg px-2 py-1 text-[1.2rem]">
            AI Analysis
          </button>
          <button className="bg-secondary cursor-pointer rounded-lg px-2 py-1 text-[1.2rem]">
            Report wrong AI behaviour
          </button>
        </div>
      </div>
      <BottomNav selected={2} />
    </div>
  );
}
