import React from "react";
import classNames from "classnames";

const Button = ({ onClick, label, bgColor, textColor, width, height, padding }) => {
  return (
    <button
      className={classNames(
        "hidden md:block px-4 py-2 rounded-full text-white text-sm font-semibold",
        bgColor || "bg-btn-primary",
        textColor || "text-white",
        width || "w-32",
        height || "h-10",
        padding || "px-4"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
