import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactUs() {
  return (
    <>
      <Navbar></Navbar>

      <div className="py-40 p-10 text-center bg-[rgb(15,23,44)]">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl z-10">
          Contact Us
        </h1>
        <div className="w-full flex items-center flex-col z-10">
          <p className="pt-5 text-gray-600 w-[50%]">
            we&apos;er here to help with any questions about our courses,
            programs or events. React our and let us know how we can assist you
            in your musical journy.
          </p>
          <input type="text" className="w-[50%] mt-10 p-2 rounded bg-black z-10" />
          <textarea className="rounded bg-black mt-5 p-2 w-[50%] z-10 resize-none h-40"></textarea>

          <div className="w-[50%] text-start z-10">
            <button className="px-5 py-2 rounded font-bold bg-emerald-500 hover:cursor-pointer mt-5">
              Send Message
            </button>
          </div>
        </div>
        <BackgroundBeams className="z-[-10]"></BackgroundBeams>
      </div>
    </>
  );
}
