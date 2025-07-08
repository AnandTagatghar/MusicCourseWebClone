import AboutUs from "@/components/AboutUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import TestmonialCards from "@/components/TestmonialCards";
import UpComingWebiners from "@/components/UpComingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div >
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <TestmonialCards></TestmonialCards>
      <UpComingWebiners></UpComingWebiners>
      <Instructors></Instructors>
      <AboutUs></AboutUs>
    </div>
  );
}
