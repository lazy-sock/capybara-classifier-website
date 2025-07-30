import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "~/components/NavBar";

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
      <main className="mx-auto mt-35 max-w-[800px] px-4 text-black dark:text-white">
        <h1 className="mb-4 text-center text-[3rem] font-bold">
          Getting Started
        </h1>
        <p className="mb-8 text-center text-[1.2rem]">
          Um auf die App zuzugreifen musst du dich erstmal registrieren. Dabei
          ist die IP des ESP-32 wichtig, damit unser Server dort die Daten
          anfragen kann.
        </p>
        <div className="mb-8 flex items-center justify-center gap-8">
          <Link
            to="/registrieren"
            className="bg-primary rounded px-2 py-1 text-[1.25rem] outline-white hover:outline-2"
          >
            Registrieren
          </Link>
          <Link
            to="/anmelden"
            className="bg-primary rounded px-2 py-1 text-[1.25rem] outline-white hover:outline-2"
          >
            Anmelden
          </Link>
        </div>
        <p className="mb-8 text-center text-[1.2rem]">
          Um auf die App zuzugreifen musst du dich erstmal registrieren. Dabei
          Damit du die App nutzen kannst, musst du auch in den Einstellungen die
          IP und eventuell den Port deiner Kamera eingeben.
        </p>
      </main>
    </div>
  );
}
