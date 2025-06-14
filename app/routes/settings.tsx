import type { Route } from "./+types/home";
import { BottomNav } from "../components/BottomNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Settings() {
  return (
    <div>
      <main className="mx-auto w-full max-w-[1000px] pt-16">
        <h1 className="text-center text-[3rem] font-bold">Settings</h1>
        <div className="flex justify-center"></div>
        <BottomNav selected={1} />
      </main>
    </div>
  );
}
