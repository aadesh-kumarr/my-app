"use client"
import Navbar from "./components/main/navbar";
import TypingAnimation from "./components/main/typing";
import Portrait from "./components/main/portrait";
import SideBar from "./components/main/sidebar";
import Resume from "./components/main/resume";
import About from "./components/main/about";
import Internship from "./components/internships/internships";
import { useRef } from "react";

export default function Home() {
  // Reference to the Internship section
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-gradient-to-br absolute 
      max-w-full from-stone-950 to-stone-700 no-scrollbar overflow-x-hidden">
      
      <div className="fixed top-0 left-0 px-2 right-0 z-40">
        <SideBar />
        <Resume />
        <Navbar />
      </div>

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
