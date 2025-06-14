import { useParams } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export default function ImagePage() {
  const { id } = useParams(); // e.g. 'bird123'

  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center">
        <h2>Viewing image: {id}</h2>
        <img className="rounded-xl" src={`/images/${id}.jpg`} alt={id} />
      </div>
      <BottomNav />
    </div>
  );
}
