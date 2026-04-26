import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../../constants";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className=" px-6 max-w-[100vw] md:max-w-360 mx-auto text-center overflow-hidden">
      <h5 className="text-sm text-secondary font-bold tracking-widest uppercase mb-2">
        TESTIMONIALS
      </h5>
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-14">
        What Our Clients Say
      </h1>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id || index}>
            {({ isActive }) => (
              <TestimonialCard
                name={testimonial.name}
                review={testimonial.text}
                location={testimonial.location}
                star={testimonial.rating}
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
