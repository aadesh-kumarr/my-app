"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function Ecommerce() {
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
    <div className="mx-auto rounded-lg border border-gray-700 shadow-xl flex flex-col justify-center items-center bg-neutral-900/20">
      <p className="text-xl text-center mt-5 text-amber-400 font-semibold bg-white bg-opacity-10 w-fit p-4 mx-auto rounded-2xl shadow-md">
        For Lostronaunt
      </p>
      <p className="mt-2 text-gray-300 italic">Solo project</p>

      <div className="text-sm bg-neutral-800 bg-opacity-50 p-4 rounded-lg mt-4 w-full">
        <p className="text-left text-2xl text-amber-400 my-3">
          What was the Problem Statement?
        </p>
        <p className="text-gray-200">
          To create an e-commerce website for a store that sells imitation and
          other items with an admin panel, allowing the user to update products,
          deals, and other information independently.
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-2 space-y-2">
          <li>Responsive UI/UX design for seamless browsing across devices.</li>
          <li>Basic CRUD operations for product management using Sanity.io.</li>
          <li>
            Admin panel to independently manage products, deals, and promotions.
          </li>
          <li>Enabled coupon system for discounts and promotional offers.</li>
          <li>Order tracking system for customer convenience.</li>
          <li>Integrated secure payment gateway for transactions.</li>
        </ul>
        <Link href={"https://ecommerce-henna-iota.vercel.app/"}>
          <Image
            src="/lostronauntdemo.png"
            alt="Screenshot of the e-commerce site"
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
            <h2 className="text-2xl text-amber-400 font-bold mb-4">
              Project Experience
            </h2>
            <div className="flex space-x-2 text-justify">
              <p className="mb-4 text-justify">
                For this project, I utilized a combination of modern web
                technologies and tools to create a seamless and feature-rich
                e-commerce experience. Key technologies included:
              </p>

              <p>
                <Image
                  src={"svgs//market.svg"}
                  alt="Market experience illustration"
                  width={300}
                  height={100}
                />
              </p>
            </div>

            <ul className="list-disc list-inside mb-4 space-y-2 text-justify">
              <li>
                <strong className="text-amber-400">Tech Stack:</strong> Built
                with Next.js for the frontend, Node.js for backend
                functionality, and Sanity.io for content management.
              </li>
              <li>
                <strong className="text-amber-400">Coupons System:</strong>{" "}
                Implemented a customizable coupon system to support promotional
                discounts and offers.
              </li>
              <li>
                <strong className="text-amber-400">Order Tracking:</strong>{" "}
                Developed a real-time tracking feature to provide customers with
                updates on order status.
              </li>
              <li>
                <strong className="text-amber-400">
                  Payment Gateway Integration:
                </strong>{" "}
                Integrated secure payment processing to enable smooth and secure
                transactions.
              </li>
              <li>
                <strong className="text-amber-400">Responsive Design:</strong>{" "}
                Ensured a fully responsive interface for an optimized user
                experience across devices.
              </li>
            </ul>

            <p className="text-justify">
              This project allowed me to leverage a modern tech stack and
              incorporate essential e-commerce features, enhancing my skills in
              building scalable and user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
