import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-primary text-xs sm:text-sm lg:text-base text-background py-1 px-2 md:py-2 md:px-4 font-medium rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
