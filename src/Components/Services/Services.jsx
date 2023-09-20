import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import image2 from "../../Assets/Services/house.jpg";
import icon from "../../Assets/Services/1.svg";
import { services, profiles } from "./ServicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const workAreas = [
    { name: "Technology" },
    { name: "Health Care" },
    { name: "Work Place" },
    { name: "Science" },
  ];

  return (
    <section>
      <div>
        <Nav />
      </div>
      <div className="px-5 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0">
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          Introducing Our <span className="text-[#ff9100]">Services</span>
        </h2>
        <p
        data-aos = "fade-up" 
        data-aos-easing = "ease-in-out"
        data-aos-delay = "100"
        
        className="mb-10 mt-5 text-center text-xl text-[#ffffff]">
          We are dedicated to creating spaces which meet clients' needs,
          requirements, and expectations.
        </p>
        <div 
        data-aos = "fade-up" 
        data-aos-easing = "ease-in-out"
        data-aos-delay = "100"

        className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div className="space-y-2 hover:scale-105 duration-700" key={i}>
              <img
                src={service.image}
                alt=""
                className="rounded-t-lg h-42 w-full object-cover"
              />
              <h2 className="text-[#ff9100] text-xl font-bold underline">
                {service.name}
              </h2>
              <p className="text-[#ffffff]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
        
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <div className="lg:rounded-l-xl flex flex-col-reverse lg:flex-row mt-10">
            <div className="bg-[#3d3c3aa9] p-5 space-y-1 flex flex-col justify-center lg:space-y-5 lg:w-1/2 rounded-lg">
              <h2 className="title text-white text-4xl font-bold md:text-5xl">
                Practice <span className="text-cyan-800">Areas</span>
              </h2>
              <h2 className="text-white font-semibold text-lg">
                As an architecture company with vast experience, we work with
                different areas of businesses.
              </h2>
              <p className="text-white"> 
                Our team prides itself in creating unique, innovative spaces
                and in dealing with projects of any complexity. We understand
                that each project is different and deserves to be properly
                handled.
              </p>
              <div className="grid grid-cols-2 md:flex md:flex-row justify-around">
                {workAreas.map((area, i) => (
                  <div className="flex flex-row gap-2 items-center" key={i}>
                    <img src={icon} alt="" className="h-6" />
                    <p key={i} className="text-[#9be607a9] font-semibold xl:text-lg">
                      {area.name}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white">
                We design both private property and commercial
                buildings with attention to every detail and special care. Our
                experts thoroughly develop designs and supervise the
                construction process from the beginning to the end.
              </p>
              <button className="bg-black w-max py-2 px-5 rounded-full font-bold text-[#ff9100] mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-black hover:text-black duration-700">
                <Link to="/portfolio">See Our Projects</Link>
              </button>
            </div>
            <img
              src={image2}
              alt=""
              className="h-[300px] lg:rounded-lg lg:h-[600px] object-cover lg:w-1/2"
            />
          </div>
        </div>
      </div>
      <div
        className="services pb-32 md:pb-0"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="mx-auto py-16 px-2 max-w-4xl xl:max-w-7xl xl:px-0">
          <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
            Our <span className="text-[#ff9100]">Profile</span>
          </h2>
          <p className="text-[#f5c855] text-lg font-semibold text-center">
            We follow the principles that have been developed over the years of
            our work.
          </p>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-5 text-center text-white xl:w-3/4 md:grid-cols-2">
            {profiles.map((profile, i) => (
              <div
                key={i}
                className="p-5 space-y-3 border-4 border-[#3d3c3aa9] rounded-xl hover:scale-95 duration-700"
              >
                <div className="h-10 w-10 p-2 flex flex-col items-center justify-center font-bold bg-[#f5c855] rounded-full mx-auto text-navColor">
                  {<profile.icon className="h-full w-full" />}
                </div>
                <h2 className="text-xl text-[#ff9100] font-semibold fonto">{profile.name}</h2>
                <p>{profile.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;