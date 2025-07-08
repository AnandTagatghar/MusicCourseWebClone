import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 text-center">
        <div>
          <h2>About Us</h2>
          <p className="text-gray-600 mt-5">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <div className="text-gray-600 flex flex-col mt-5">
            <Link href={"/home"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/courses"}>Courses</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>

        <div>
          <h2>Follow Us</h2>
          <div className="text-gray-600 flex flex-col mt-5">
            <Link href={"/facebook"}>facebook</Link>
            <Link href={"/twitter"}>Twitter</Link>
            <Link href={"/instagram"}>Instagram</Link>
          </div>
        </div>

        <div>
          <h2>Contact Us</h2>
          <p className="text-gray-600 mt-5">
            Hyderabad, India <br />
            Hyderabad: 500001 <br />
            Email: info@musicschool.com <br />
            Phone: (123)-456-7890
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-center">&copy; Music School. All rights reserved</p>
    </>
  );
};

export default AboutUs;
