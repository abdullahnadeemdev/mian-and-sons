import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-primary text-background py-2 px-4 font-medium rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
