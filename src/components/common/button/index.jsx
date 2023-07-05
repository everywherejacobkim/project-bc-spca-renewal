import React from "react";
import classNames from "classnames";

const Button = ({ onClick, label, bgColor, textColor, width, height, padding, border, hoverBg, borderColor }) => {
  return (
    <button
      className={classNames(

        "hidden md:block px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white active:bg-primary",
        bgColor || "bg-gray-40",
        textColor || "text-primary",
        width || "w-32",
        height || "h-10",
        padding || "px-4",
        border || 'none',
        hoverBg || 'none',
        borderColor || 'none'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
