import React from "react";
import { interiors } from "./PortfolioData";
import { useState } from "react";

const Interiors = () => {
  const [sliceNum, setSliceNum] = useState(5);
  const setSliceNumFunc = (data) => {
    if (sliceNum === 5) {
      setSliceNum(data.length);
    } else {
      setSliceNum(5);
    }
  };

  const initialData = interiors.slice(0, sliceNum);
  return (
    <div>
      <h2 className="font-semibold md:text-3xl xl:text-5xl fonto text-[#ff9100]">3. Interiors</h2>
      <p className="xl:text-xl xl:w-3/4 my-3 text-white">
      Our holistic approach to interiors ensures that the interior spaces align seamlessly with the building's architectural 
      design, resulting in classy, harmonious and well-integrated environments.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {initialData.map((item, i) => (
          <img
            src={item.image}
            alt=""
            key={i}
            className={`petro w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full ${
              initialData.length !== 5
                ? `last:col-span-2 md:last:col-span-2 xl:last:col-span-2`
                : `md:last:col-span-2 lg:last:col-span-1`
            }`}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => setSliceNumFunc(interiors)}
          className="bg-[#f5c855] py-2 px-5 rounded-full font-bold text-black mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-[#f5c855] hover:text-[#f5c855] duration-700"
        >
          {`${initialData.length === 5 ? `See More` : `See Less`}`}
        </button>
      </div>
    </div>
  );
};

export default Interiors;
