import React from "react";

const Button = ({ className = "", children, variant = "primary" }) => {
  const baseClasses =
    "text-xs sm:text-sm lg:text-base py-2 px-4 md:py-2.5 md:px-4 font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-primary text-background hover:bg-blue-800",

    glass:
      "bg-black/20 backdrop-blur-md border border-white/40 text-white hover:bg-black/30 hover:border-white/70 shadow-lg",
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button className={`${baseClasses} ${selectedVariant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
