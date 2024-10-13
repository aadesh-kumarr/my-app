import Image from "next/image";
export default function Header() {
  return (
    <div className="">
      <p
        className=" text-5xl
      p-4
      font-mono
      flex max-w-full w-fit mx-auto space-x-5"
      >
        <div className="flex mx-auto flex-col lg:flex-row text-left">
          <span> Welcome&nbsp;</span> <span> To My&nbsp;</span> <span> Projects</span>
        </div>
        <Image
          src={"/svgs/projects.svg"}
          alt="oops!"
          width={180}
          height={200}
        />
      </p>
      <div className="border border-white rounded-lg p-2 text-justify">
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
