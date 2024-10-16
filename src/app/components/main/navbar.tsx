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
      <div className="w-screen flex mt-9  justify-between items-center text-stone-100 z-50">
        <ul className="flex absolute bg-zinc-800 p-2 rounded-full gap-3 text-base font-serif shadow-lg shadow-amber-400/20">
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
            <Link href="/Blogs">Blogs</Link>
          </li>
        </ul>

        <Link
          href="https://www.youtube.com/@DecodedPerson-hn5np"
          className="right-2 top-3  absolute flex flex-col text-right text-sm bg-zinc-800  px-6 rounded-full shadow-amber-400/20 shadow-lg"
        >
          <p className="text-amber-400 text-sm">See me on</p>
          <span className="flex items-center justify-end text-lg text-amber-400">
            YouTube <FaYoutube className=" text-red-700" />
          </span>
        </Link>
      </div>
    </>
  );
}
