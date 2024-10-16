"use client"
import Navbar from "../components/main/navbar";
import Switch from "../components/blogs/switch";
// import Personal_blogs         00 "../components/blogs/personal_blogs";
import { useState } from "react";

export default function Blog() {
  const [blog, setBlog] = useState(false); // Blog mode: false for Professional, true for Personal

  return (
    <div className=" max-w-full absolute text-white w-screen
     bg-gradient-to-br from-stone-950 to-stone-900
     no-scrollbar overflow-x-hidden">
      <div className="fixed top-0 left-0 px-2 right-0 ">
        <Navbar />
      </div>
      <hr className="mt-20 mb-5" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      
      {/* Pass setBlog function to the child to control the state */}
      <Switch blog={blog} setBlog={setBlog}/>

      {/* Optionally display current mode */}
      <div className="text-center mt-5">
        {/* <Personal_blogs /> */}
        blogs are yet to come
        <h2>Current Mode: {blog ? "Personal" : "Professional"}</h2>
      </div>
    </div>
  );
}
