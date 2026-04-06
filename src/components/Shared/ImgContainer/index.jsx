import React from "react";

const ImgContainer = ({ title, desc, img }) => {
  return (
    <div className="relative aspect-4/5 max-w-40 sm:max-w-60 lg:max-w-80 xl:max-w-100 text-sm md:text-base">
      <div className="bg-black/40 w-full h-full absolute rounded-2xl"></div>
      <div className="absolute bottom-0 p-2  text-background text-start">
        <p className="font-semibold">{title}</p>
        <p className="">{desc}</p>
      </div>
      <img
        src={img}
        alt=""
        className="h-full rounded-2xl w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ImgContainer;
