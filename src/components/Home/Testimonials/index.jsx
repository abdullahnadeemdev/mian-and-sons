import React from "react";
import { homeOne } from "../../../assets/images";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../../constants";

import { Swiper, SwiperSlide } from "swiper/react";

const index = () => {
  return (
    <div>
      <h5 className="text-sm text-secondary">TESTIMONIALS</h5>
      <h1 className="text-4xl font-extrabold mb-10">What Our Clients Say</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="flex gap-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              name={testimonial.name}
              review={testimonial.text}
              star={testimonial.star}
              imgP={testimonial.imgP}
              index={index}
            />
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default index;
