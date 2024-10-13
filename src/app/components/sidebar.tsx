"use client";
import { useState, useEffect, useRef } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { CiViewTimeline } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import { Contact } from "./contact";
import { Certificates } from "./certificates";
import { GoGoal } from "react-icons/go";

export default function SideBar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Helper function to check if a link is active
  const isActive = (link: string) => activeLink === link;

  // Handle click outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setActiveLink(null); // Reset active link if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={sidebarRef}
      className="flex flex-col absolute z-50 text-xl font-bold w-80 -translate-x-[93%] mt-24 text-slate-900"
    >
      <div
        onClick={() => {
          scrollToTop(); // Scroll to top when Home is clicked
          setActiveLink("home");
        }}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md opacity-10
            ${isActive("home") ? "opacity-100 z-50" : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
            duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Home <IoHomeOutline />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("projects")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md opacity-10 
            ${isActive("projects") ? "opacity-100 z-50" : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
            duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Projects <FaLaptopCode />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("goals")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md opacity-10 
            ${isActive("goals") ? "opacity-100 z-50" : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
            duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Goals <GoGoal />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("certificates")}
        className={`mb-1 p-2 overflow-hidden bg-slate-100 rounded-md ml-10 flex flex-col opacity-10
            ${isActive("certificates")
              ? "z-50 opacity-100 h-[32rem] -translate-y-56 duration-500 translate-x-[80%] w-[110%] sm:translate-x-[32vw] md:translate-x-[20vw] lg:translate-x-[20vw]"
              : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw] h-10 text-right"}
            duration-500 transition-all ease-in-out`}
      >
        <div
          className={`flex flex-row items-center gap-4 cursor-default ${
            isActive("certificates")
              ? "justify-between"
              : "justify-end"
          } transition-all ease-in-out duration-500`}
        >
          Certificates <LiaCertificateSolid />
          {isActive("certificates") && (
            <button
              onClick={() => setActiveLink(null)} // Set active link to null on click
              className="text-black text-lg hover:opacity-70"
            >
              &times; {/* Cross icon */}
            </button>
          )}
        </div>
        <Certificates />
      </div>

      <div
        onClick={() => setActiveLink("timeline")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md opacity-10 
            ${isActive("timeline") ? "opacity-100 z-50" : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
            duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Timeline <CiViewTimeline />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("contact")}
        className={`text-right mb-1 p-2 overflow-hidden bg-slate-100 rounded-md ml-10 flex flex-col opacity-10
            ${isActive("contact")
              ? "z-50 opacity-100 h-96 -translate-y-64 duration-500 translate-x-[80%] w-[110%] sm:translate-x-[32vw] md:translate-x-[20vw] lg:translate-x-[20vw]"
              : "hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw] h-10"}
            transition-all ease-in-out duration-700`}
      >
        <div
          className={`flex flex-row items-center gap-4 cursor-default ${
            isActive("contact") ? "justify-center" : "justify-end"
          } transition-all ease-in-out duration-500`}
        >
          Contact <MdOutlineContactPhone />
        </div>
        <Contact />
      </div>
    </div>
  );
}
