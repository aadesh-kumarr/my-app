"use client";
import Image from "next/image";
import { useState } from "react";
import { Edureka, Lostronaunt } from "./internship_content";

export default function Internship() {
  // State to track which component is currently active (Edureka or Lostronaunt)
  const [isEdurekaOpen, setIsEdurekaOpen] = useState(false);

  // Toggle between Edureka and Lostronaunt when the image is clicked
  const handleclick = () => {
    setIsEdurekaOpen(!isEdurekaOpen);
  };

  return (
    <div className="relative  mx-4 p-0">
      <p className="font-serif  text-2xl text-center w-fit mx-auto pt-5 text-neutral-200 underline underline-offset-4">
        INTERNSHIP
      </p>
      <Image
        alt="Internships"
        src={"/internships.png"}
        width={200}
        height={200}
        className="mx-auto w-fit pt-10 rounded-full cursor-pointer"
        onClick={handleclick}
      />

      {/* Conditional rendering based on isEdurekaOpen */}
      <div className="transition-transform duration-700 mt-10">
        {isEdurekaOpen ? (
          <div className="opacity-100 translate-x-0 transition-all">
            <Edureka />
          </div>
        ) : (
          <div className="opacity-100 translate-x-0 transition-all">
            <Lostronaunt />
          </div>
        )}
      </div>

      {/* Other content below */}
      <div className="mt-8 text-white">
        <p>Additional content goes here below the internship section.</p>
      </div>
    </div>
  );
}
