import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HowItWorks() {
  return (
    <div>
      <main className="mx-auto w-full max-w-[1000px] pt-16">
        <h1 className="text-center text-[3rem] font-bold">Getting Started</h1>
        <p className="mb-8 text-center text-[1.2rem]">
          Um auf die App zuzugreifen musst du dich erstmal registrieren. Dabei
          ist die IP des ESP-32 wichtig, damit unser Server dort die Daten
          anfragen kann.
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/registrieren"
            className="bg-primary rounded px-2 py-1 text-[1.25rem]"
          >
            Registrieren
          </Link>
        </div>
      </main>
    </div>
  );
}
