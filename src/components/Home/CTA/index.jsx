import React from "react";
import Button from "../../Shared/Button";

const CTA = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" p-8 bg-primary w-[80vw] text-center flex rounded-4xl flex-col gap-10 items-center justify-center ">
        <h1 className="text-white font-semibold text-base sm:text-lg lg:text-5xl">
          Ready To Build Your Legacy?
        </h1>
        <p className="text-grey text-xs sm:text-sm lg:text-base max-w-120">
          Contact our expert team today for a private consultation regarding
          your next residential project
        </p>
        <span className="flex flex-col md:flex-row gap-4 ">
          <Button className="bg-secondary">Schedule Consultation</Button>
          <Button variant="glass">Our Projects</Button>
        </span>
      </div>
    </div>
  );
};

export default CTA;
