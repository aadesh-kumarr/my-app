"use client";
import React from "react";
import TypingAnimation from "./components/main/typing";
import Portrait from "./components/main/portrait";
import About from "./components/main/about";
import Internship from "./components/internships/internships";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Home() {
  // Reference to the Internship section
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
  
    <hr
      className="mt-20"
      style={{ borderColor: "rgba(255, 215, 0, 0.5)" }}
    />
      <div
        className="bg-stone-800 
      max-w-full no-scrollbar overflow-x-hidden  px-9 "
      >
        <div className=" bg-black/20 rounded shadow-md shadow-amber-400/20 py-5 mt-20 overflow-hidden">
<div className="z-0">
        <TypingAnimation />
        <Portrait />
        </div>
        <div className="overfolow-hidden -z-50-">
        <BackgroundBeams />
        </div>
        </div>
        <About internshipRef={internshipRef} />

        <div ref={internshipRef} className="my-24">
          <Internship />
        </div>
       
      </div>
      </>
  
    
  );
}
