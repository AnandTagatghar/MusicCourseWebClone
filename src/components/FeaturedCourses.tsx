"use client";
import Link from "next/link";
import React from "react";
import course_data from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const courses = course_data.courses.filter(
    (course: Course) => course.isFeatured
  );
  // console.log(courses);
  return (
    <div className="bg-gray-900 py-12">
      <div>
        <h1 className="text-teal-600 text-center font-semibold tracking uppercase">
          FEATURED COURSES
        </h1>
        <p className="text-3xl mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
          Learn With The Best
        </p>
      </div>
      <div className="my-10 flex flex-wrap px-30 gap-10">
        {courses.map((course: Course, i: number) => (
          <BackgroundGradient
            className="min-w-80 w-80 h-full bg-black p-10 rounded-3xl "
            key={i}
          >
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <p className="text-md text-gray-500">{course.description}</p>

            <Link href={course.slug}>
              <button className="bg-neutral-200 text-black font-semibold cursor-pointer py-2 px-4 rounded-lg mt-5 opacity-[0.8] hover:opacity-[1]">
                View All Courses
              </button>
            </Link>
          </BackgroundGradient>
        ))}
      </div>
      <div className="text-center">
        <Link href={"#"}>
          <button className="bg-neutral-200 text-black font-semibold cursor-pointer py-2 px-4 rounded-lg mt-5 opacity-[0.8] hover:opacity-[1]">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
