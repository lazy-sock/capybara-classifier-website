import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-10 flex h-20 w-screen items-center gap-8 bg-white text-xl lg:h-28 lg:px-4">
      <Link
        to="/"
        className="mr-auto ml-2 flex gap-4 text-[1.75rem] font-bold lg:ml-20 lg:text-[2.5rem]"
      >
        <img src="capybara.svg" alt="" width={"80px"} />
        Capybara
      </Link>
      <div className="mr-12 hidden max-w-3xl gap-12 lg:flex">
        <Link to="/hardware" className="flex gap-2">
          <img src="icons/microchip.svg" alt="" width="25px" />
          Hardware
        </Link>
        <Link to="/ai" className="flex gap-2">
          <img src="icons/brain.svg" alt="" width="25px" />
          AI
        </Link>
        <Link to="/code" className="flex gap-2">
          <img src="icons/code.svg" alt="" width="25px" />
          Code
        </Link>
      </div>
    </nav>
  );
}
