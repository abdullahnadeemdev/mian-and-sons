import React from "react";
import { homeOne } from "../../../assets/images";
import ImgContainer from "../../Shared/imgContainer";

const Expertise = () => {
  return (
    <div className="mt-10 bg-background h-full mb-15">
      <p className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        OUR EXPERTISE
      </p>
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>

      <div className="flex flex-wrap gap-4 justify-evenly mt-15">
        <ImgContainer
          title={"Grey Structure"}
          desc={"Lorem ipsum dolor sit amet ."}
          img={homeOne}
        />

        <ImgContainer
          title={"Grey Structure"}
          desc={"Lorem ipsum dolor sit amet ."}
          img={homeOne}
        />

        <ImgContainer
          title={"Grey Structure"}
          desc={"Lorem ipsum dolor sit amet ."}
          img={homeOne}
        />
      </div>
    </div>
  );
};

export default Expertise;
