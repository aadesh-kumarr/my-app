import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Certificates() {
  const certificates = [
    "/online_certificates/collegetocorporaee.png",
    "/online_certificates/KAGGLE.png",
    "/online_certificates/kimo_introduction.PNG",
    "/online_certificates/openweaver_python.png",
    "/online_certificates/perfect_elearning_python.png",
    "/online_certificates/perfect_ elearning_data-structure.jpg",
    "/online_certificates/PERFECT_ELEARNING.jpg",
    "/online_certificates/thinqbator_chatbot.png",
    "/online_certificates/uptoskills_python_workshop.png",
  ];

  return (
    <>
      <div className=" justify-center text-justify border border-red-800 py-2 mt-4  px-2 no-scrollbar">
        <p className="text-lg">Why Certificates Matter??</p>
        <p className="text-sm">
          Certifications validate my skills and expertise, enhancing my
          credibility in the industry. They improve job prospects, increase
          earning potential, and showcase my commitment to continuous learning,
          giving me a competitive edge in my career.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs mt-5"
      >
        <CarouselContent className="mt-1 h-[250px]">
          {certificates.map((certificate,index) => (
            <CarouselItem key={certificate} className="mt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex overflow-auto flex-col items-center justify-center 
                                          bg-gradient-to-t from-slate-200 to-slate-600 h-full w-full p-2 "
                  >
                    <Image
                      src={certificate}
                      width={200}
                      height={90}
                      alt="cant load image"
                      className="pt-2 rounded"
                    />
                    <span className="text-center">
                      Lorem ipsum dolor sit amet.
                    </span>
                    <span>{index+1}/{certificates.length}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
