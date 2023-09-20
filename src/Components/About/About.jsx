import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from '../../rez/umaha.png'
import Choices from "./Choices";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="mx-auto max-w-5xl px-2 py-10 md:py-16 xl:mt-32 xl:max-w-7xl xl:px-0"
      >
        <h2 className="title text-[#ff9100] text-4xl font-bold text-center xl:text-5xl">
          Who Are <span className="text-white">We</span>
        </h2>
        <div className="flex flex-col gap-5 mt-5 md:mt-16 md:space-x-5 md:flex-row">
          <div className="h-64 md:h-96 md:w-1/2">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:w-1/2">
            <h2 className="text-[#ff9100] text-lg font-semibold mb-3">
              We are innovators and quick problem-solvers committed to providing our
              customers with exceptional services.
            </h2>
            <p className="text-white xl:text-lg">
                Established in 2019, Reel Archer Studios is an architectural firm whose sole 
                purpose is to redefine our skyline with beautiful and classic architecture.
                We are known for our excellent services, quality work and great vibes and feeling with architecture.
            </p>
            <button className="bg-[#f5c855] py-2 px-5 rounded-full font-bold text-black mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-[#f5c855] hover:text-[#f5c855] duration-700">
              <Link to="/about Us">More About Us</Link>
            </button>
          </div>
        </div>

      </div>
      <div
        className="element"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <Choices />
      </div>
    </section>
  );
};

export default About;
