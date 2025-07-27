import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { signIn } from "~/auth";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Anmelden() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1100px] pt-30 pb-30 text-black dark:text-white">
        <h1 className="text-center text-[3rem] font-bold">Anmelden</h1>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col">
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] rounded border-2 px-1 text-[1.25rem] outline-black focus:border-2 dark:outline-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[300px] rounded border-2 px-1 text-[1.25rem] outline-black focus:border-2 dark:outline-white"
            />
          </div>
          <button
            onClick={() => signIn(email, password)}
            className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem]"
          >
            Anmelden
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
