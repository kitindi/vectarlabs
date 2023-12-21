import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="bg-[#1D1D1F] w-full" id="hero">
      <Navbar />

      <div class="px-4 pt-44 pb-8 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-20 sm:pt-52 lg:pb-10">
        <div class="flex flex-col w-full mb-4 text-center">
          <div>
            <h1 class="  max-w-8xl text-4xl font-bold tracking-tighter text-slate-200 sm:text-5xl lg:text-7xl lg:max-w-7xl">
              Building tech products that empowers{" "}
              {/* <br class="hidden lg:block" /> */}
              your business to thrive sustainably.
            </h1>
          </div>

          <p class="max-w-3xl mx-auto mt-8 text-lg sm:text-2xl tracking-tighter text-center text-slate-300">
            We are a full digital service agency, crafting cutting-edge
            innovative solutions for enterprises, startups and organizations.
          </p>

          <Link
            spy={true}
            smooth={true}
            offset={5}
            duration={700}
            to="contact"
            className="text-xl text-slate-900 bg-[#21F06E] py-3 px-14 rounded-sm font-bold w-fit mx-auto my-7 cursor-pointer"
          >
            Let's Talk Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
