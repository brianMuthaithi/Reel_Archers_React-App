import { Link } from "react-router-dom";
import { data } from "./AboutData";

const Choices = () => {
   return (
    <div className="mx-auto max-w-5xl px-2 py-10 mt-5 xl:mt-20 xl:max-w-7xl xl:px-0">
      <div className="flex flex-col items-center justify-center">
      <h2 className="title text-[#000000] text-4xl font-bold text-center xl:text-5xl">
          Our <span className="text-[#ff9100]">Specialty</span></h2>
        <div className="grid grid-cols-1 px-5 gap-5 mt-5 md:px-0 md:mt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {data.map((option, i) => (
            <div
              key={i}
              className="hover:scale-110 text-center space-y-3 p-2 rounded-xl cursor-pointer duration-500"
            >
                <img
                  src={option.image}
                  alt=""
                  className="h-96 w-96 mx-auto rounded-lg object-cover"
                />
                <p className="caption text-white text-left">{option.caption}</p> 
            </div>
          ))}
        </div>
        <button className="bg-black py-2 px-5 rounded-full font-bold text-[#ffffff] mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-black hover:text-black duration-700">
          <Link to="/portfolio">Visit our portfolio</Link>
        </button>
      </div>
    </div>
  );

};
export default Choices;