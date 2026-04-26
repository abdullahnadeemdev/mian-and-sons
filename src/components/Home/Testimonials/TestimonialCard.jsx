import React from "react";
import { Star } from "lucide-react";
const TestimonialCard = ({ name, review, location, star, isActive }) => {
  return (
    <div
      className={`p-8 rounded-2xl w-full max-w-100 mx-auto text-left transition-all duration-500 ease-in-out flex flex-col h-full ${
        isActive
          ? "bg-primary text-white shadow-2xl scale-105 z-10"
          : "bg-white text-dark shadow-md scale-95 opacity-70 cursor-pointer"
      }`}
    >
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={isActive ? "text-blue-400" : "text-blue-600"}
            fill={i < star ? "currentColor" : "none"}
          />
        ))}
      </div>

      <p
        className={`text-xs md:text-lg italic mb-8 text-wrap leading-relaxed ${
          isActive ? "text-slate-200" : "text-slate-600"
        }`}
      >
        "{review}"
      </p>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden  bg-slate-200">
          <img
            src={`https://ui-avatars.com/api/?name=${name}&background=random`}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h4
            className={`font-bold text-lg ${isActive ? "text-white" : "text-dark"}`}
          >
            {name}
          </h4>
          <p
            className={`text-sm ${isActive ? "text-slate-300" : "text-slate-500"}`}
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
