import React from "react";

const Methods = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="bg-grey/20 rounded-full p-4">{icon}</span>
      <p className="text-dark font-bold text-center text-base md:text-lg">
        {title}
      </p>
      <p className="max-w-85 text-center text-xs md:text-sm">{desc}</p>
    </div>
  );
};

export default Methods;
