"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Lostronaunt",
    link: "https://lostronauntscrubber.vercel.app/",
    thumbnail:
      "/scrubberdemo.png",
  },
  {
    title: "Django",
    link: "https://whatbroadcast.onrender.com/",
    thumbnail:
      "/Djangodemo.png",
  },
  {
    title: "E-commerce",
    link: "https://ecommerce-henna-iota.vercel.app/",
    thumbnail:
      "/lostronauntdemo.png",
  },

];
