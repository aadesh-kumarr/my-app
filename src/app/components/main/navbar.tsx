"use client"
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return(
      

        <>
    <div className="w-screen flex  mt-5 mb-3 justify-between text-stone-100 z-50" >
      <ul className="flex absolute bg-zinc-900 pt-1 px-2 rounded-full gap-3 text-sm  font-serif">
        <li className="cursor-pointer">
          <Link href='/' onClick={scrollToTop} >Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="#">Certifications</Link>
        </li>
      </ul>
      <Link  href='https://www.youtube.com/@DecodedPerson-hn5np' className="right-10 top-0 absolute flex flex-col text-justify"><p> See me on</p> <span className="flex items-center text-xl"> Youtube <FaYoutube /></span></Link>
    
    </div>
  </>
)
}
