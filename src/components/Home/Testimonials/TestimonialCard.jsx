import React from "react";

const TestimonialCard = ({ name, review, star, imgP, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col gap-8 px-5 text-white  py-4 max-w-80 bg-primary rounded-2xl"
    >
      <p className=" overflow-hidden text-base md:text-xl text-[#ff9800]">
        {star}
      </p>

      <p className="italic text-sm md:text-base">"{review}""</p>
      <div className="flex items-center gap-5 text-lg font-semibold">
        <div className="w-15 h-15 ">
          <img
            src={imgP}
            alt="avatar of customer"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <p className="text-sm md:text-base">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
