"use client";
import Image from "next/image";
import { useState } from "react";
import { Edureka, Lostronaunt } from "./internship_content";

export default function Internship() {
  const [isEdurekaOpen, setIsEdurekaOpen] = useState(true); // Set Edureka as default visible

  // Toggle between Edureka and Lostronaunt when the image is clicked
  const handleClick = () => {
    setIsEdurekaOpen(!isEdurekaOpen);
  };

  return (
    <div className="relative mx-4 p-0">
      <p className="font-serif text-2xl text-center w-fit mx-auto pt-5 text-neutral-200 underline underline-offset-4">
        INTERNSHIP
      </p>
      <Image
        alt="Internships"
        src={"/internships.png"}
        width={200}
        height={200}
        className="mx-auto w-fit pt-10 rounded-full cursor-pointer"
        onClick={handleClick}
      />

      {/* Both components are present but their visibility is controlled by opacity and transform */}
      <div className="mt-10 relative">
        <div
          className={`absolute inset-0 transition-all duration-700 transform ${
            isEdurekaOpen
              ? "opacity-100 translate-y-0 z-10"
              : "opacity-0 -translate-y-10 z-0 pointer-events-none"
          }`}
        >
          <Edureka />
        </div>

        <div
          className={`absolute inset-0 transition-all duration-700 transform ${
            !isEdurekaOpen
              ? "opacity-100 translate-y-0 z-10"
              : "opacity-0 -translate-y-10 z-0 pointer-events-none"
          }`}
        >
          <Lostronaunt />
        </div>
      </div>
    </div>
  );
}
