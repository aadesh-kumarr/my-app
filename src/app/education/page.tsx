import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import Image from "next/image";
export default function Education() {
  return (
    <div className="bg-gradient-to-br max-w-full absolute text-white w-screen from-stone-950 to-stone-900 no-scrollbar overflow-x-hidden">

    
<div className="fixed top-0 left-0 px-2 right-0 z-50" >
      </div>
        <hr
          className="mt-20"
          style={{ borderColor: "rgba(255, 215, 0, 0.5)" }}
        />
        <Image src={"/svgs/educationbackground.svg"}
        width={450}
        height={480}
        alt="this is my education"
        className="text-amber-400 fixed right-0 top-52 w-1/2  sm:visible invisible"/>

    <h2 className="text-4xl font-semibold text-center text-amber-400 mb-12 mt-5 ">
        Study Series
      </h2>

      <div className="relative border-l border-amber-400 pl-8 space-y-12 sm:w-1/2">
        <div className="relative group">
          <div className="absolute left-[-24px] top-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900">
            <FaUniversity className="text-xl" />
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-400">B.Tech in Computer Science</h3>
            <p className="italic">Doon Istitute Of Engineering and Technology</p>
            <p className="text-gray-400">Final Year Student(2025)</p>
            <p className="mt-2">
              Learned full-stack web development, algorithms, and completed an internship with Edureka and Lostronaunt. Gained significant practical experience in coding and technical projects.
            </p>
          </div>
        </div>

        {/* 12th Grade */}
        <div className="relative group">
          <div className="absolute left-[-24px] top-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900">
            <FaGraduationCap className="text-xl" />
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-400">12th Grade</h3>
            <p className="italic">Bobmay Public School, Dehradun</p>
            <p className="text-gray-400">Completed: 2021</p>
            <p className="mt-2">
              Specialized in Physics, Chemistry, and Mathematics. Engaged in technical fests and science fairs.
            </p>
          </div>
        </div>

        {/* 10th Grade */}
        <div className="relative group">
          <div className="absolute left-[-24px] top-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900">
            <FaSchool className="text-xl" />
          </div>
          <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-400">10th Grade</h3>
            <p className="italic">DAV centenary public school,Haridwar</p>
            <p className="text-gray-400">Completed: 2019</p>
            <p className="mt-2">
              Studied Science and Mathematics. Participated in school events including debates and coding competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
