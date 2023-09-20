import React, { useState, useEffect } from "react";
import { residentials } from "./PortfolioData";

const Residentials = () => {
  const [sliceNum, setSliceNum] = useState(5);
  const [initialData, setInitialData] = useState([]);

  const setSliceNumFunc = (data) => {
    if (sliceNum === 5) {
      setSliceNum(data.length);
    } else {
      setSliceNum(5);
    }
  };

  useEffect(() => {
    setInitialData(residentials.slice(0, sliceNum));
  }, [sliceNum]);

  return (
    <div>
      <h2 className="font-semibold md:text-3xl fonto xl:text-3xl text-[#ff9100]">2. Residential Projects</h2>
      <p className="xl:text-xl xl:w-3/4 my-3 text-white">
        Designing with your ideas helps us bring your dream to life and add
        comfort. We develop the ideas that fit your lifestyle while working with
        your financial range to achieve a well balanced project.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {initialData.map((item, i) => (
            <img
              src={item.image}
              alt=""
              className={`w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full ${
                initialData.length !== 5
                  ? `last:col-span-2 md:last:col-span-2 xl:last:col-span-2`
                  : `md:last:col-span-2 lg:last:col-span-1`
              }`}
            />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => setSliceNumFunc(residentials)}
          className="bg-[#f5c855] py-2 px-5 rounded-full font-bold text-black mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-[#f5c855] hover:text-[#f5c855] duration-700"
        >
          {`${initialData.length === 5 ? `See More` : `See Less`}`}
        </button>
      </div>
    </div>
  );
};

export default Residentials;