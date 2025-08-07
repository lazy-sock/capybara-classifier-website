import type { Route } from "./+types/home";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { signIn } from "~/auth";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Anmelden bei Capybara" },
  ];
}

export default function Anmelden() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("")
  let navigate = useNavigate()

  const anmelden = () => {
    if(email === "" || password == ""){
      setStatus("E-Mail und Passwort müssen ausgefüllt sein.")
    } else {
      signIn(email, password).catch(() => {setStatus("Anmeldung nicht erfolgreich. Gehe sicher, dass deine Daten richtig sind.")});
      navigate("/app")
    }
  }

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
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={anmelden}
            className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem] text-white"
          >
            Anmelden
          </button>
          <div className="text-red-400">{status}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
