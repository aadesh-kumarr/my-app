"use client";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className="h-20 w-full fixed bg-stone-900"></div>
      <div className="w-full flex mt-9 px-2  justify-between items-center text-stone-100 z-50">
        <ul className="flex absolute bg-zinc-800 p-2 rounded-full gap-3 text-base font-serif shadow-sm shadow-amber-400">
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/" className="anim" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/projects" className="anim">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/Blogs" className=" anim">Blogs</Link>
          </li>
        </ul>

        <Link
          href="https://www.youtube.com/@DecodedPerson-hn5np"
          className="right-2 top-3  absolute flex flex-col text-right text-sm bg-zinc-800 px-6 rounded-full shadow-amber-400 shadow"
        >
          <p className="text-neutral-200 hover:text-amber-400 text-sm">See me on</p>
          <span className="flex items-center justify-end text-lg">
            YouTube <FaYoutube className=" text-red-700" />
          </span>
        </Link>
      </div>
    </>
  );
}
