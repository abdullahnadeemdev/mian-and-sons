import React from "react";
import { homeOne } from "../../../assets/images";
import ImgContainer from "../../Shared/imgContainer";

const SERVICES_PREVIEW = [
  {
    title: "Premium Grey Structure",
    desc: "100% accurate excavation and precise foundation leveling with A-Class bricks and 60-Grade branded steel.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
  {
    title: "Luxury Interior & Exterior",
    desc: "High-end finishing with imported materials, false ceilings, designer woodwork, and modern elevation.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
  {
    title: "Consultation & Management",
    desc: "Technical consultation and transparent project management from blueprint to handover.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
];

const Expertise = () => {
  return (
    <div className="mt-10 bg-background h-full mb-15">
      <p className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        OUR EXPERTISE
      </p>
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>

      <div className="flex flex-wrap gap-4 justify-evenly mt-15">
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
