import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import logo from "../../Assets/Us/logo.png";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation(); 

  useEffect(() => {
    // Check if the screen width is less than 768px (adjust this value as needed)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Event listener for scrolling
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Initial check for mobile
    checkIsMobile();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const setNavBar = () => {
    setActive(!active);
  };

  const hideNavBar = () => {
    setActive(false);
  };

  const isHomePage = location.pathname === "/"; 

  const navData = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Services" },
    { name: "Portfolio" },
    { name: "Contact Us" },
  ];
  return (
    <nav
      className={`py-0 md:px-2 z-50 ${
        isMobile || scrolling || !isHomePage ? "bg-black" : "bg-transparent" 
      } ${scrolling ? "fixed w-full top-0" : ""}`}
    >
      <div className="flex flex-row justify-between items-center max-w-5xl mx-auto xl:max-w-7xl">
        <Link
          to="/"
          className="flex flex-row items-center h-24 z-50 -ml-12 md:ml-0"
        >
          <img src={logo} alt="" className="w-full h-full object-cover" />
          <p className="text-[#ffffff] md:text-xl">
            ReelArcher
          </p>
        </Link>
        <div
          className={`flex flex-col absolute top-0 duration-300 ${
            active ? `-left-[0%]` : `-left-[100%]`
          } h-screen w-full bg-black items-start pl-[25%] justify-center space-y-5 md:left-0 md:items-center md:pl-0 md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent  md:space-x-10 md:relative md:flex-row md:top-0 md:w-max`}
        >
          
          {/* {diable nav for mobile navBar} */}
          <div className="text-[#ff9100] block absolute text-2xl top-10 right-10 md:hidden">
            <RxCross1 onClick={() => hideNavBar()} />
          </div>
          {navData.map((link, i) => (
            <Link
              onClick={() => hideNavBar()}
              to={link.name === "Home" ? `/` : `/${link.name.toLowerCase()}`}
              key={i}
              className="font-semibold text-xl text-[#ff9100] md:text-lg"
            >
              {`${link.name === "Sign In" ? link.name : link.name}`}
            </Link>
          ))}
        </div>

        {/* {buttons for mobile navBar} */}
        <div className="flex flex-row items-center space-x-3 text-[#ff9100] md:hidden">
          <AiOutlineMenu className="text-2xl" onClick={() => setNavBar()} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
