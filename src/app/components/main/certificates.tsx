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
    { certificate: "/online_certificates/collegetocorporaee.png", name: "Collegue to Corporatee by DR SUMIT GUPTA UPES" },
    { certificate: "/online_certificates/KAGGLE.png", name: "python by Kaggle GOOGLE CERTIFIED" },
    { certificate: "/online_certificates/kimo_introduction.png", name: "Introduction to AI/ML by Kimo" },
    { certificate: "/online_certificates/openweaver_python.png", name: "Basics of Python by Openweaver" },
    { certificate: "/online_certificates/perfect_elearning_python.png", name: "Python and Machine learning by Perfect Elearning" },
    { certificate: "/online_certificates/perfect_ elearning_data-structure.jpg", name: "Data Structures in Python by Perfect Elearning" },
    { certificate: "/online_certificates/PERFECT_ELEARNING.jpg", name: "Python by Perfect Elearning" },
    { certificate: "/online_certificates/thinqbator_chatbot.png", name: "Chatbot by CiscoThinqbator" },
    { certificate: "/online_certificates/uptoskills_python_workshop.png", name: "Python by Uptoskills" },
    { certificate: "/online_certificates/internshaala_brain_booster.png", name: "Brain Booster Quiz by InternsShaala" }
  ];

  return (
    <>
      <div className="justify-center text-justify border border-red-800 py-2 mt-4  px-2 no-scrollbar">
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
        <CarouselContent className="mt-1 h-[240px]">
          {certificates.map((certificate, index) => (
            <CarouselItem key={certificate.name} className="mt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex overflow-auto flex-col items-center justify-center 
                                          bg-gradient-to-t from-slate-200 to-slate-600 h-full w-full p-2 "
                  >
                    <Image
                      src={certificate.certificate}
                      width={200}
                      height={90}
                      alt="cant load image"
                      className="pt-2 rounded"
                    />
                    <span className="text-center">
                      {certificate.name}
                    </span>
                    <span>{index + 1}/{certificates.length}</span>
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
