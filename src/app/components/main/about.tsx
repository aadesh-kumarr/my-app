import Image from 'next/image';

export default function About() {
  return (
    <div className="border border-neutral-500 bg-gradient-to-br from-black/40 to-black/10 text-zinc-200 mt-10 m-4 mb-5 pb-4 relative group ">
            <p className="text-center font-serif py-5  underline opacity-0 text-2xl group-hover:opacity-100 transition-opacity duration-300">
        About Me
      </p>
      <div className=" flex flex-row  justify-around gap-2 px-auto">
        {/* First Block */}
        <div className="text-sm border-black bg-black border   p-2 flex flex-col justify-center items-center text-center">
          <Image
            src="/svgs/education.svg"
            alt="Portrait of Aadesh Kumar"
            width={200}
            height={10}
            className="rounded p-1"
          />
          <span>Final year student</span>
        </div>

        {/* Second Block */}
        <div className="text-sm border-black bg-black border   p-2 flex flex-col justify-center items-center text-center">
          <Image
            src="/svgs/techie.svg"
            alt="Techie icon"
            width={200}
            height={100}
            className="rounded p-1"
          />
          <span>Techie</span>
        </div>

        {/* Third Block */}
        <div className="text-sm border-black bg-black border   p-2 flex flex-col justify-center items-center text-center">
          <Image
            src="/svgs/confident.svg"
            alt="Confident icon"
            width={200}
            height={100}
            className="rounded p-1"
          />
          <span>Confident</span>
        </div>
    
    {/* Fourth block */}
        <div className="text-sm border-black bg-black border   p-2 flex flex-col justify-center items-center text-center">
          <Image
            src="/svgs/internships.svg"
            alt="Confident icon"
            width={200}
            height={10}
            className="rounded p-1"
          />
          <span>2 Internships</span>
        </div>
      </div>

      {/* About Me Text */}

      <div className="px-4 text-sm pt-5 text-justify space-y-4">
      <p>
  Hello! I&apos;m <span className="font-serif text-xl">Aadesh Kumar</span>, a <span className="font-semibold text-blue-400">Final Year B.tech CSE Student</span> with a strong foundation in <span className="font-semibold text-green-400">Python</span> and <span className="font-semibold text-green-400">Django</span>. While my primary focus lies in backend development, I&apos;ve also honed my skills in web development using <span className="font-semibold text-purple-400">Next.js</span>, giving me a versatile edge when building dynamic and responsive applications.
</p>

<p>
  Beyond coding, I&apos;ve taken on leadership roles in organizing <span className="font-semibold text-yellow-400">college fests and events</span>, including <span className="font-semibold text-yellow-400">debates</span>, <span className="font-semibold text-yellow-400">coding quests</span>, and various other activities. These experiences have helped me develop not only my technical skills but also my organizational and teamwork abilities.
</p>

<p>
  I&apos;m also passionate about sharing knowledge and engaging with the tech community. I run a <span className="font-semibold text-red-400">YouTube channel</span> dedicated to <span className="font-semibold text-red-400">programming</span>, where I create content to help others learn and grow in the field.
</p>

<p>
  Additionally, I&apos;ve gained valuable professional experience during my internship with <span className="font-semibold text-orange-400">Edureka</span>, where I further sharpened my skills and industry knowledge.
</p>

 <p> Let&apos;s connect and explore how we can work together to create impactful digital solutions!</p>
  </div>
  </div>
  );
}
