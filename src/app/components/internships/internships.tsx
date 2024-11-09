"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import Lamp from "./header";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
    <Lamp />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-stone-200 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] text-2xl h-full md:h-fit md:max-h-[90%]  flex flex-col bg-stone-800  sm:rounded-3xl no-scrollbar overflow-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={250}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-5/6 mt-5 mx-auto h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bol text-stone-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-stone-200"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4  py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Certificate
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="text-stone-200 text-xs md:text-sm lg:text-base h-fit md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 text-xl flex flex-col md:flex-row justify-between items-center bg-stone-900 mt-4 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row p-2">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={150}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 mx-auto w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-stone-200 text-3xl text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-stone-200 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-wite"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
      description: "Machine Learning and Data Science",
      title: "Edureka!",
      src: "/online_certificates/edureka_data_science_internship.png",
      link: "/online_certificates/edureka_data_science_internship.png",
      content: () => {
        return (
          <div className="flex flex-col md:flex-row gap-4 w-full ">
            <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900 ">
              <p className="text-stone-200">
                Completed a{" "}
                <span className="font-bold">
                  2-month machine learning internship
                </span>
                , gaining hands-on experience in:
              </p>
              <ul className="list-disc ml-5 font-semibold text-stone-200">
                <li>Supervised learning</li>
                <li>Unsupervised learning</li>
                <li>Reinforcement learning</li>
              </ul>
            </div> 
            <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
              <p className="text-stone-200">
                Worked in a{" "}
                <span className="font-bold">team of 20 members</span> to develop
                models, implementing key algorithms like:
              </p>
              <ul className="list-disc ml-5 font-semibold text-stone-200">
                <li>Linear regression</li>
                <li>Decision trees</li>
                <li>Neural networks</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      description: "Market Analysis and Web Development",
      title: "Lostronaunt",
      src: "/online_certificates/lostronaunt.png",
      link: "/online_certificates/lostronaunt.png",
      content: () => {
        return (
          <div className="flex flex-col  gap-4 w-full mt-5">
            <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900">
              <p className="text-stone-200">
                Completed a <span className="font-bold">1-month internship</span> in
                market analysis and web development, gaining hands-on experience in:
              </p>
              <ul className="list-disc ml-5 font-semibold text-stone-200">
                <li>Analyzing market trends and customer behavior</li>
                <li>App development focusing on user-centric design</li>
              </ul>
            </div>
            <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
              <p className="text-stone-200">
                Worked as a <span className="font-bold">full stack developer</span> and implemented features like:
              </p>
              <ul className="list-disc ml-5 font-semibold text-stone-200">
                <li>Node.js and Next.js for backend and frontend</li>
                <li>Single-handedly created a functional web app</li>
              </ul>
            </div>
            <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
              <p className="text-stone-200 font-bold">Key Accomplishment</p>
              <p className="text-stone-200">
                Successfully created a web-app that reduced paperwork by 70%.
              </p>
            </div>
          </div>
        );
      },
    },
  ];
  
