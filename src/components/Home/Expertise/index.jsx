import React from "react";
import { homeOne } from "../../../assets/images";
import ImgContainer from "../../Shared/ImgContainer";
import { SERVICES_PREVIEW } from "../../../constants";

const Expertise = () => {
  return (
    <div className="mt-10 bg-background h-full mb-15">
      <p className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        OUR EXPERTISE
      </p>
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>

      <div className="flex flex-wrap gap-4 justify-around mt-15">
        {SERVICES_PREVIEW.map((s) => (
          <ImgContainer
            key={s.title}
            title={s.title}
            desc={s.desc}
            img={s.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
