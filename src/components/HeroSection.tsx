"use client";
import React from "react";
import { Button } from "./ui/moving-boarder";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="flex justify-center align-center w-full h-auto md:h-[40rem] flex-col relative mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="text-center p-4 relative z-10 w-full">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Drive into our comperhensive music courses and transform your musical
          journy today. Wether you&apos;re a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
