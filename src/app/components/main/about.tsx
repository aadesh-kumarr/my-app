"use client";
import Image from 'next/image';
import { RefObject } from 'react';
import Link from 'next/link';
import { Vortex } from '@/components/ui/vortex';

interface AboutProps {
  internshipRef: RefObject<HTMLDivElement>; // Accept ref as a prop
}

export default function About({ internshipRef }: AboutProps) {

  // Function to handle scrolling to Internship
  const handleScrollToInternship = () => {
    if (internshipRef.current) {
      internshipRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="border border-amber-400 z-0 text-zinc-200 mb-40 mt-32 lg:mt-80 m-4 ">
      <Vortex     
        backgroundColor=''
        rangeY={800}
        particleCount={50}
        baseHue={120}
        className=" py-5"
      >
      <p className="anim corsor-default text-center font-serif py-5  text-2xl">
       <Link href="" className='anim'> About Me</Link>
      </p>

      <div className="flex flex-row justify-evenly px-1 overflow-hidden gap-2">
        {/* First Block */}
        <Link href={'/education'} className="svgs">
          <Image
            src="/svgs/education.svg"
            alt="Portrait of Aadesh Kumar"
            width={200}
            height={10}
            className="rounded p-1"
          />
          <span>Final year student</span>
        </Link>

        {/* Second Block */}
        <Link href={'/projects'} className="svgs">
          <Image
            src="/svgs/techie.svg"
            alt="Techie icon"
            width={200}
            height={100}
            className="rounded p-1"
          />
          <span>4 projects</span>
        </Link>

        {/* Third Block */}
        <div className="svgs">
          <Image
            src="/svgs/confident.svg"
            alt="Confident icon"
            width={200}
            height={100}
            className="rounded p-1"
          />
          <span>Confident</span>
        </div>

        {/* Fourth Block (Scroll to Internship) */}
        <div
          className="svgs"
          onClick={handleScrollToInternship}
        >
          <Image
            src="/svgs/internships.svg"
            alt="Internships icon"
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
          Hello! I&apos;m <span className="font-serif text-xl">Aadesh Kumar</span>, a{' '}
          <span className="font-medium text-amber-400">Final Year B.Tech CSE Student</span> with a strong foundation in{' '}
          <span className="font-medium text-amber-400">Python</span> and{' '}
          <span className="font-medium text-amber-400">Django</span>. While my primary focus lies in backend
          development, I&apos;ve also honed my skills in web development using{' '}
          <span className="font-medium text-amber-400">Next.js</span>, giving me a versatile edge when building
          dynamic and responsive applications.
        </p>

        <p>
          Beyond coding, I&apos;ve taken on leadership roles in organizing{' '}
          <span className="font-medium text-amber-400">college fests and events</span>, including{' '}
          <span className="font-medium text-amber-400">debates</span>,{' '}
          <span className="font-medium text-amber-400">coding quests</span>, and various other activities. These
          experiences have helped me develop not only my technical skills but also my organizational and teamwork
          abilities.
        </p>

        <p>
          I&apos;m also passionate about sharing knowledge and engaging with the tech community. I run a{' '}
          <span className="font-medium text-amber-400">YouTube channel</span> dedicated to{' '}
          <span className="font-medium text-amber-400">programming</span>, where I create content to help others learn
          and grow in the field.
        </p>

        <p>
          Additionally, I&apos;ve gained valuable professional experience during my internship with{' '}
          <span className="font-medium text-amber-400">Edureka</span>, where I further sharpened my skills and
          industry knowledge.
        </p>

        <p>Let&apos;s connect and explore how we can work together to create impactful digital solutions!</p>
      </div>
      </Vortex>
    </div>
  );
}
