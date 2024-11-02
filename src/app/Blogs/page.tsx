"use client"
import Navbar from "../components/main/navbar";
import Switch from "../components/blogs/switch";
import Personal_blogs from "../components/blogs/personal_blogs";
import { useEffect, useState } from "react";
import { Datatype } from "@/type";

export default function Blog() {
  const [category, setBlogcategory] = useState(false); // false = professional, true = personal
  const [blogs, setBlogs] = useState<Datatype[] | null>(null);
  const [searchInput, setSearchInput] = useState(""); // # Added state for search input

  const fetchblogs = async () => {
    try {
      const response = await fetch('/api/admin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result.blogs);
      setBlogs(result.blogs);  // Ensure result.blogs is an array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchblogs();  // Call fetchblogs only once when component mounts
  }, []);

  // # Filter blogs by both category and search input
  const filteredBlogs = blogs
    ?.filter(blog => blog.category === (category ? "personal" : "professional"))
    .filter(blog => blog.title.toLowerCase().includes(searchInput.toLowerCase()))  // # Added filter for search input
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-full absolute text-white w-screen bg-gradient-to-br from-stone-950 to-stone-800 no-scrollbar overflow-x-hidden">
      <div className="fixed top-0 left-0 px-2 right-0 ">
        <Navbar />
      </div>
      <hr className="mt-20 mb-5" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />

      {/* Pass setBlog function to the child to control the state */}
      <Switch blog={category} setBlog={setBlogcategory} />

      {/* Search bar */}
      <div className="flex justify-center p-1 bg-neutral-700 w-fit mx-auto rounded-full">
        <input
          type="text"
          className="rounded-full px-2 text-black"
          placeholder="Search by title"
          value={searchInput}  // # Controlled input for search
          onChange={(e) => setSearchInput(e.target.value)}  // # Update searchInput state
        />
      </div>

      {/* Optionally display current mode */}
      <div className="text-center mt-5">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <Personal_blogs key={blog._id} blog={blog} />  // # Render filtered blogs
          ))
        ) : (
          <p>No blogs available</p>  // Message if no blogs exist
        )}
        <h2>Current Mode: {category ? "Personal" : "Professional"}</h2>
      </div>
    </div>
  );
}