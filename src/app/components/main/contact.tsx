import React from "react";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export   function Contact(){
    return(

        
<>
<div className="justify-end border border-teal-800 p-10 mt-8">
WALKING TOWARDS BRILLIANCE
</div>
<div className="flex flex-row gap-2">
{/* Social Media Links */}
<div className="flex flex-row mt-4 align-middle items-center gap-2 mx-auto">
  <a href="https://instagram.com/those_misty_stories">
    <FaInstagram className="text-2xl text-black hover:text-gray-600 transition-colors" />
  </a>
  <a href="https://www.youtube.com/@DecodedPerson-hn5np">
    <FaYoutube className="text-2xl text-black hover:text-gray-600 transition-colors" />
  </a>
  <a href="https://github.com/aadesh-kumarr">
    <FaGithub className="text-2xl text-black hover:text-gray-600 transition-colors" />
  </a>
  <a href="https://wa.me/+91 9760655299">
    <IoLogoWhatsapp className="text-2xl text-black hover:text-gray-600 transition-colors" />
  </a>
</div>
</div>
</>

)
}