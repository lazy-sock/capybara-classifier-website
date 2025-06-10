import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="h-fit-content mt-auto h-[400px] w-full bg-black dark:bg-dark-black p-8 text-white">
      <div className="flex flex-wrap gap-12">
        <div className="flex flex-col">
          <h3 className="text-2xl">Showcase</h3>
          <Link to="/">Home</Link>
          <Link to="/hardware">Hardware</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl">App</h3>
          <Link to="/app">App</Link>
          <Link to="/cam">Camera</Link>
          <Link to="/connect">Connect</Link>
          <Link to="/wiki">Wiki</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl">Explanations</h3>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/math">Mathematics behind it</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl">Contact</h3>
          <a href="">GitHub</a>
        </div>
      </div>
    </div>
  );
}
