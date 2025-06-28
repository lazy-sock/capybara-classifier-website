import { useState } from "react";
import { Link } from "react-router-dom";

export default function LanguageSwitch() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  return (
    <Link
      to={currentLanguage === "de" ? "/" : "/en"}
      className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-white text-[1.25rem] font-semibold text-black"
    >
      {currentLanguage === "de" ? "DE" : "EN"}
    </Link>
  );
}
