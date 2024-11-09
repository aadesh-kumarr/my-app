import Image from "next/image";
export default function Header() {
  return (
      <div className="flex sm:flex-row-reverse flex-col">
        <div className="flex sm:flex-col sm:w-1/2">
      <p
        className="
        text-5xl
      py-4
      font-mono
      flex mx-auto space-x-5 "
      >
        <span className="flex mx-auto flex-col lg:flex-row text-left text-amber-400 ">
          <span> Welcome&nbsp;</span> <span> To My&nbsp;</span> <span> Projects</span>
        </span>
        </p>
        <Image
          src={"/svgs/projects.svg"}
          alt="oops!"
          width={200}
          height={250}
          className="mx-auto"
        />
        </div>
      <div className="border border-white rounded-lg p-2 text-justify sm:w-1/2">
        <p className="text-3xl py-4">Why Projects Matter?</p>
        <p className="">
          Projects are more than just tasks—they are proof of expertise,
          innovation, and real-world problem-solving skills. Each project
          represents hands-on experience, creativity, and the ability to turn
          concepts into tangible results. They showcase my journey in tackling
          challenges, learning new technologies, and delivering results that
          make an impact. Through my projects, I aim to demonstrate my ability
          to create efficient, scalable, and user-centric solutions. They are a
          testament to my commitment to growth and continuous learning in a
          fast-evolving industry.
        </p>
      </div>
    </div>
  );
}
