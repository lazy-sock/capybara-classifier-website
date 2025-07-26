import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Registrieren() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1100px] pt-30 pb-30">
        <h1 className="text-center text-[3rem] font-bold">Registrieren</h1>
      </main>
      <Footer />
    </div>
  );
}
