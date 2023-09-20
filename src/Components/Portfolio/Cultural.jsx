import React from "react";
import { cultural } from "./PortfolioData";

const Cultural = () => {
  return (
    <div>
      <h2 className="font-bold md:text-3xl xl:text-3xl fonto text-[#ff9100]">
        4. Cultural Architecture
      </h2>
      <p className="xl:text-xl xl:w-3/4 my-3 text-white">
        We leverage design and architectural concepts to tell the story of the African culture
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {cultural.map((item, i) => (
          <img
            src={item.image}
            alt=""
            key={i}
            className={`w-full rounded h-52 object-cover first:col-span-2 md:h-[246px] md:last:col-span-3 lg:h-60 xl:h-72 
            first:row-span-2 first:h-64 md:first:h-fit xl:last:h-[340px] last:col-span-2 lg:last:col-span-2 last:row-span-2 xl:last:col-span-2`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cultural;
