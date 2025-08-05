import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

import { signUp } from "~/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Registrieren() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1100px] pt-30 pb-30 text-black dark:text-white">
        <h1 className="text-center text-[3rem] font-bold">Registrieren</h1>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col">
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
              className="w-[300px] rounded border-2 px-1.5 py-1 text-[1.25rem] outline-black focus:border-2 dark:outline-white"
            />
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="password">Passwort</label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Passwort"}
              required={true}
              className={`w-[300px] rounded border-2 px-1.5 py-1 pr-12 text-[1.25rem] outline-black focus:border-transparent dark:outline-white`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 top-6 right-0 flex cursor-pointer items-center px-3 text-gray-400 hover:text-gray-600 focus:outline-none disabled:cursor-not-allowed"
            >
              {showPassword ? <p>hide</p> : <p>show</p>}
            </button>
          </div>
          <button
            onClick={() => signUp(email, password)}
            className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem] text-white"
          >
            Registrieren
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
