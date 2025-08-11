import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { BottomNav } from "~/components/BottomNav";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Capybara-WIKI für Vögel" },
  ];
}

export default function Wiki() {
  return (
    <div className="flex flex-col flex-grow">
      <NavBar />
      <main className="mx-auto w-full max-w-[1000px] pt-28">
        <h1 className="text-center text-[3rem] font-bold mb-4">Von Capybara unterstützte Vögel</h1>
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "amsel"}
          ><div className="rounded-lg bg-[url(images/amsel.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Amsel</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "blaumeise"}
          ><div className="rounded-lg bg-[url(images/blaumeise.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Blaumeise</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "buchfink"}
          ><div className="rounded-lg bg-[url(images/buchfink.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Buchfink</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "buntspecht"}
          ><div className="rounded-lg bg-[url(images/buntspecht.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Buntspecht</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "elster"}
          ><div className="rounded-lg bg-[url(images/elster.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Elster</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "feldsperling"}
          ><div className="rounded-lg bg-[url(images/feldsperling.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Feldsperling</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "gimpel"}
          ><div className="rounded-lg bg-[url(images/gimpel.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Gimpel</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "kohlmeise"}
          ><div className="rounded-lg bg-[url(images/kohlmeise.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Kohlmeise</Link>
                    <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "rabe"}
          ><div className="rounded-lg bg-[url(images/rabe.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Rabe</Link>
                              <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "rotkehlchen"}
          ><div className="rounded-lg bg-[url(images/rotkehlchen.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Rotkehlchen</Link>
                              <Link
            className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4"
            to={"/wiki/" + "eichhoernchen"}
          ><div className="rounded-lg bg-[url(images/eichhoernchen.jpg)] bg-cover bg-center h-[150px] w-[220px]"></div>Eichhörnchen</Link>
        </div>
        <BottomNav selected={2} />
      </main>
        <Footer />
    </div>
  );
}
