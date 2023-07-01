import React from "react";
import classNames from "classnames";

const Button = ({ onClick, label, bgColor, textColor, width, height }) => {
  return (
    <button
      className={classNames(
        "hidden md:block px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white active:bg-primary",
        bgColor || "bg-gray-40",
        textColor || "text-primary",
        width || "w-32",
        height || "h-10"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
