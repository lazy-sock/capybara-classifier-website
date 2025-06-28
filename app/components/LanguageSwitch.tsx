import { useState } from "react";
import { Link, useRouteError } from "react-router-dom";

export default function LanguageSwitch() {
  const [currentLanguage, setCurrentLanguage] = useState("de");

  // Let's check what's happening with the Router context
  console.log("LanguageSwitch rendering...");

  // Temporarily replace Link with a button to see if that fixes it
  return (
    <button
      onClick={() => {
        const targetPath = currentLanguage === "de" ? "/en" : "/";
        console.log("Would navigate to:", targetPath);
        window.location.href = targetPath;
      }}
      className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-white text-[1.25rem] font-semibold text-black"
    >
      {currentLanguage === "de" ? "EN" : "DE"}
    </button>
  );
}

// Alternative version with error boundary
export function LanguageSwitchWithErrorBoundary() {
  const [currentLanguage, setCurrentLanguage] = useState("de");

  try {
    return (
      <Link
        to={currentLanguage === "de" ? "/en" : "/"}
        className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-white text-[1.25rem] font-semibold text-black"
      >
        {currentLanguage === "de" ? "EN" : "DE"}
      </Link>
    );
  } catch (error) {
    console.error("Link error:", error);
    return (
      <a
        href={currentLanguage === "de" ? "/en" : "/"}
        className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-white text-[1.25rem] font-semibold text-black"
      >
        {currentLanguage === "de" ? "EN" : "DE"}
      </a>
    );
  }
}
