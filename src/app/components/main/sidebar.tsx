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

  const isActive = (link: string) => activeLink === link;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setActiveLink(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          scrollToTop();
          setActiveLink("home");
        }}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md ${isActive("home") ? "opacity-100 z-50" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"} 
        duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Home <IoHomeOutline />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("projects")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md ${isActive("projects") ? "opacity-100 z-50" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
        duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Projects <FaLaptopCode />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("goals")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md ${isActive("goals") ? "opacity-100 z-50" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
        duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Goals <GoGoal />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("certificates")}
        className={`mb-1 p-2 overflow-hidden bg-slate-100 rounded-md ml-10 flex flex-col ${isActive("certificates") ? "opacity-100 z-50 h-[32rem] -translate-y-56 duration-500 translate-x-[80%] w-[110%] sm:translate-x-[32vw] md:translate-x-[20vw] lg:translate-x-[20vw]" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw] h-10 text-right"} 
        duration-500 transition-all ease-in-out`}
      >
        <div className={`flex flex-row items-center gap-4 cursor-default ${isActive("certificates") ? "justify-between" : "justify-end"} transition-all ease-in-out duration-500`}>
          Certificates <LiaCertificateSolid />
          {isActive("certificates") && (
            <button
              onClick={() => setActiveLink(null)}
              className="text-black text-lg hover:opacity-70"
            >
              &times;
            </button>
          )}
        </div>
        <Certificates />
      </div>

      <div
        onClick={() => setActiveLink("timeline")}
        className={`text-right mb-1 p-2 bg-slate-100 rounded-md ${isActive("timeline") ? "opacity-100 z-50" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw]"}
        duration-500 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-end gap-4 cursor-default">
          Timeline <CiViewTimeline />
        </div>
      </div>

      <div
        onClick={() => setActiveLink("contact")}
        className={`text-right mb-1 p-2 overflow-hidden bg-slate-100 rounded-md ml-10 flex flex-col ${isActive("contact") ? "opacity-100 z-50 h-96 -translate-y-64 duration-500 translate-x-[80%] w-[110%] sm:translate-x-[32vw] md:translate-x-[20vw] lg:translate-x-[20vw]" : "opacity-40 hover:opacity-100 hover:translate-x-[25vw] lg:hover:translate-x-[10vw] h-10"} 
        transition-all ease-in-out duration-700`}
      >
        <div className={`flex flex-row items-center gap-4 cursor-default ${isActive("contact") ? "justify-center" : "justify-end"} transition-all ease-in-out duration-500`}>
          Contact <MdOutlineContactPhone />
        </div>
        <Contact />
      </div>
    </div>
  );
}