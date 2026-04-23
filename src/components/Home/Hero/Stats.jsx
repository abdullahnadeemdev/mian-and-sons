import React from "react";

const Stats = () => {
  return (
    <ul className="grid grid-cols-2 bg-background py-8 rounded-2xl w-[80vw] md:grid-cols-4 gap-4 justify-around shadow-xl shadow-dark/20">
      <li className="text-center">
        <p className="text-primary font-bold text-lg sm:text-2xl lg:text-4xl">
          200+
        </p>
        <p className="font-medium text-dark text-xs sm:text-sm md:text-base">
          LUXURY PROJECTS
        </p>
      </li>

      <li className="text-center">
        <p className="text-primary font-bold text-lg sm:text-2xl lg:text-4xl">
          26+
        </p>
        <p className="font-medium text-dark text-xs sm:text-sm md:text-base">
          YEARS EXCELLENCE
        </p>
      </li>

      <li className="text-center">
        <p className="text-primary font-bold text-lg sm:text-2xl lg:text-4xl">
          100%
        </p>
        <p className="font-medium text-dark text-xs sm:text-sm md:text-base">
          PERMANENT STAFF
        </p>
      </li>

      <li className="text-center">
        <p className="text-primary font-bold text-lg sm:text-2xl lg:text-4xl">
          100%
        </p>
        <p className="font-medium text-dark text-xs sm:text-sm md:text-base">
          CLIENT SATISFACTION
        </p>
      </li>
    </ul>
  );
};

export default Stats;
