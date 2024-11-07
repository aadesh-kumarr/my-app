"use client"
import TypingAnimation from "./components/main/typing";
import Portrait from "./components/main/portrait";

import About from "./components/main/about";
import Internship from "./components/internships/internships";
import { useRef } from "react";

export default function Home() {
  // Reference to the Internship section
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-stone-800 absolute 
      max-w-full no-scrollbar overflow-x-hidden">
      
 

      <hr className="mt-20" style={{ borderColor: 'rgba(255, 215, 0, 0.5)' }} />
      
      <TypingAnimation />
      <Portrait />
      
      {/* Pass internshipRef to About component */}
      <About internshipRef={internshipRef} />
      
      {/* Internship section */}
      <div ref={internshipRef}>
        <Internship />
      </div>
    </div>
  );
}
