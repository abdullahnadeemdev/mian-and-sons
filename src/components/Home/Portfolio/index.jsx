import React from "react";
import { homeOne } from "../../../assets/images";

const Portfolio = () => {
  return (
    <div>
      <p className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        Portfolio
      </p>
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>

      <div className="flex flex-col sm:flex-row gap-6 my-15 mx-6 justify-around">
        <div className="aspect-4/5 flex-1 ">
          <img
            src={homeOne}
            alt=""
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-4 w-full flex-1">
          <div className="flex-1 ">
            <img
              src={homeOne}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-1 gap-4">
            <div className="">
              <img
                src={homeOne}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="">
              <img
                src={homeOne}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
