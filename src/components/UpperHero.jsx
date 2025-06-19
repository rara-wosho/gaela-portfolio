import React from "react";
import Avatar from "./ui/Avatar";

function UpperHero() {
  return (
    <div className="px-4 w-full bg-[url('/images/bg.jpeg')] bg-cover bg-center flex items-end relative justify-end pt-16">
      <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-neutral-500/85 to-neutral-700/95"></div>

      <Avatar />
      <h1 className="font-bold text-white text-[52px] uppercase tracking-wider z-10">
        <span className="text-green-500">Avy</span>gael Montefalcon
      </h1>
    </div>
  );
}

export default UpperHero;
