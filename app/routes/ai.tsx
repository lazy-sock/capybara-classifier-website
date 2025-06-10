import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../Footer";
import NavBar from "../NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HowItWorks() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1000px] pt-30">
        <h1 className="text-center text-[3rem] font-bold">
          Artificial Intelligence
        </h1>
        <h2 className="text-[2rem] font-bold">Architecture</h2>
        <div className="flex flex-wrap gap-8 font-semibold">
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Input Image (224×224×3)
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            ResNet50 Backbone
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Attention Module 1
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Attention Module 2
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Global Average Pooling
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Feature Enhancement Layers
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Classification Head
          </div>
        </div>
        <h2 className="text-[2rem] font-bold">Dataset</h2>
        <h2 className="text-[2rem] font-bold">Training</h2>
        <h2 className="text-[2rem] font-bold">Accuracy</h2>
      </main>
      <Footer />
    </div>
  );
}
