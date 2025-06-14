import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { BottomNav } from "~/components/BottomNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Wiki() {
  return (
    <div>
      <main className="mx-auto w-full max-w-[1000px] pt-16">
        <h1 className="text-center text-[3rem] font-bold">Wiki for Birds</h1>
        <div className="flex justify-center">
          <Link
            className="bg-primary h-[150px] w-[250px] rounded-lg"
            to={"/wiki/" + "rotkehlchen"}
          ></Link>
        </div>
        <BottomNav selected={3} />
      </main>
    </div>
  );
}
