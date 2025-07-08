"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const UpComingWebiners = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      link: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      link: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      link: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      link: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      link: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      link: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="bg-[rgb(15,23,42)] p-10 ">
      <div className="text-center">
        <h2 className="font-bold text-teal-600 sm:text-xl tracking">
          FEATURED WEBINERS
        </h2>
        <p className="font-bold text-2xl sm:text-4xl md:text-5xl">
          Enhance Your Musical Journy
        </p>
      </div>
      <HoverEffect items={featuredWebinars} className="pt-30"></HoverEffect>
      <div className="text-center">
        <Link href={"#"}>
          <button className="bg-neutral-200 text-black font-semibold cursor-pointer py-2 px-4 rounded-lg mt-5 opacity-[0.8] hover:opacity-[1]">
            Veiw All Webiners
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpComingWebiners;
