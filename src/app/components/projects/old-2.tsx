"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export function Lostronaunt() {
  // State to control visibility of vardiv
  const [isVisible, setIsVisible] = useState(false);

  // Reference for the vardiv to auto-scroll
  const vardivRef = useRef<HTMLDivElement | null>(null);

  // Scroll into view when isVisible is true
  useEffect(() => {
    if (isVisible && vardivRef.current) {
      vardivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isVisible]);

  // Toggle visibility when the button is clicked
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (



    <div
      className="mx-auto  rounded-lg 
                border border-gray-700 shadow-xl  
                flex flex-col justify-center items-center 
                bg-neutral-900/20"
    >
      <p
        className="text-xl text-center mt-5 text-amber-400 font-semibold 
                   bg-white bg-opacity-10 
                   w-fit p-4 mx-auto rounded-2xl shadow-md"
      >
        For ScrubVibe
      </p>
      <p className="mt-2 text-gray-300 italic">
        Solo project done during internship.
      </p>

      <div className="text-sm bg-neutral-800 bg-opacity-50 p-4 rounded-lg mt-4 w-full">
        <p className="text-left text-2xl text-amber-400 my-3">
          What was the Problem Statement?
        </p>
        <p className="text-gray-200">
          To keep a track on orders for a Scrubber brand at initial stages. The
          customer asked for a simple UI with strong backend functionalities.
          Must include the following:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-2">
          <li>Hardcoded email ids for log-in and usage.</li>
          <li>Basic CRUD operations.</li>
          <li>Message service to be done on order received and payment received.
          </li>
        </ul>
        <Link href={"https://lostronauntscrubber.vercel.app/"}>
          <Image
            src="/scrubberdemo.png"
            alt="oops"
            width={300}
            height={200}
            className="mx-auto mt-5 border border-amber-400 rounded-lg underline-offset-8"
          />
        </Link>
        <p
          className="mx-auto text-center mt-5 cursor-pointer bg-black w-fit p-2 px-4 rounded-full bg-opacity-30"
          onClick={handleToggle} // Toggle the div when clicked
        >
          Tap for More
          <IoIosArrowDropdownCircle className="mx-auto" />
        </p>

        {/* Conditionally render vardiv with smooth transition */}
        <div
          ref={vardivRef}
          className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
            isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="p-6 border border-gray-700 shadow-lg rounded-lg bg-neutral-900 text-gray-300 mt-4"
            id="vardiv"
          >
            <h2 className="text-2xl text-amber-400 font-bold mb-4 ">
              Local Market Experience
            </h2>
            <div className="flex space-x-2 text-justify">
            <p className="mb-4 text-justify ">
              During my internship, I had the opportunity to gain valuable
              experience working with local market businesses. I collaborated
              with small-scale vendors and brands, focusing on the following
              areas:
            </p>
            <p>
              <Image src={'svgs//market.svg'}
              alt="oops"
              width={300}
              height={100}/>
            </p>
            </div>

            <ul className="list-disc list-inside mb-4 space-y-2 text-justify">
              <li>
                <strong className="text-amber-400">Market Research:</strong>{" "}
                Conducted on-ground market research to understand consumer
                behavior and local trends.
              </li>
              <li>
                <strong className="text-amber-400">Product Promotion:</strong>{" "}
                Assisted in planning and executing promotional strategies for
                local businesses, increasing their visibility in the market.
              </li>
              <li>
                <strong className="text-amber-400">Order Management:</strong>{" "}
                Helped streamline order processes and inventory management,
                ensuring smooth operations for small-scale enterprises.
              </li>
              <li>
                <strong className="text-amber-400">Customer Engagement:</strong>{" "}
                Worked on strategies to enhance customer engagement, contributing
                to a better customer service experience.
              </li>
            </ul>

            <p className="text-justify">
              This hands-on experience allowed me to understand the unique
              challenges faced by local businesses and equipped me with practical
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Django() {
  // State to control visibility of vardiv
  const [isVisible, setIsVisible] = useState(false);

  // Reference for the vardiv to auto-scroll
  const vardivRef = useRef<HTMLDivElement | null>(null);

  // Scroll into view when isVisible is true
  useEffect(() => {
    if (isVisible && vardivRef.current) {
      vardivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isVisible]);

  // Toggle visibility when the button is clicked
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="mx-auto rounded-lg border border-gray-700 shadow-xl flex flex-col justify-center items-center bg-neutral-900/20"
    >
      <p
        className="text-xl text-center mt-5 text-blue-400 font-semibold bg-white bg-opacity-10 w-fit p-4 mx-auto rounded-2xl shadow-md"
      >
        Django Project Overview
      </p>
      <p className="mt-2 text-gray-300 italic">Solo project on Django framework.</p>

      <div className="text-sm bg-neutral-800 bg-opacity-50 p-4 rounded-lg mt-4 w-full">
        <p className="text-left text-2xl text-blue-400 my-3">What was the Problem Statement?</p>
        <p className="text-gray-200">
          A project built using Django aimed at simplifying user authentication and handling database operations. The core features include:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-2">
          <li>To create a website to be integrated with the whatsp broadcast software.</li>
          <li>CRUD operations using Django models.</li>
          <li>Basic user profile management and session handling.</li>
        </ul>
        <Link href={"https://whatbroadcast.onrender.com/"}>
          <Image
            src="/Djangodemo.png"
            alt="Django Project Screenshot"
            width={300}
            height={200}
            className="mx-auto mt-5 border border-blue-400 rounded-lg underline-offset-8"
          />
        </Link>

        <p
          className="mx-auto text-center mt-5 cursor-pointer bg-black w-fit p-2 px-4 rounded-full bg-opacity-30"
          onClick={handleToggle} // Toggle the div when clicked
        >
          Tap for More
          <IoIosArrowDropdownCircle className="mx-auto" />
        </p>

        {/* Conditionally render vardiv with smooth transition */}
        <div
          ref={vardivRef}
          className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
            isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="p-6 border border-gray-700 shadow-lg rounded-lg bg-neutral-900 text-gray-300 mt-4"
            id="vardiv"
          >
            <h2 className="text-2xl text-blue-400 font-bold mb-4">Key Learnings from the Django Project</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-justify">
              <li>
                <strong className="text-blue-400">Authentication:</strong> Implemented secure login, signup, and password reset functionality using Django&apos;s authentication system.
              </li>
              <li>
                <strong className="text-blue-400">Database Handling:</strong> Worked with Django&apos;s ORM to manage user data and session storage efficiently.
              </li>
              <li>
                <strong className="text-blue-400">Template Integration:</strong> Used Django templating language to render dynamic content and user-specific pages.
              </li>
              <li>
                <strong className="text-blue-400">Deployment:</strong> Successfully deployed the application on a live server, ensuring scalability.
              </li>
            </ul>

            <p className="text-justify">
              This project helped me understand Django&apos;s powerful framework and equipped me with experience in handling real-world web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}