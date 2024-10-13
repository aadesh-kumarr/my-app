"use client";
import Image from "next/image";
import { useState } from "react";
import { Edureka,Lostronaunt } from "./internship_content";

export default function Internship() {
  // State to track if the Edureka div is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the isOpen state when the image is clicked
  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <p className="font-serif text-2xl text-center text-neutral-200 underline underline-offset-4">
        INTERNSHIP
      </p>
      <Image
        alt="Internships"
        src={"/internships.png"}
        width={200}
        height={200}
        className="mx-auto pt-10 rounded-full cursor-pointer"
        onClick={handleclick}
      />

      {/* The div that slides down */}
      <div
        className={`transition-all duration-700 overflow-hidden -z-50 ${
          isOpen ? " translate-y-3 opacity-100 translate-x-0" : "  translate-x-full opacity-10 -translate-y-48"
        }`}
      >
        <Edureka />
      </div>

      <div className=" text-white">
        <Lostronaunt />

        
      </div>
      </div>
    
  );
}
