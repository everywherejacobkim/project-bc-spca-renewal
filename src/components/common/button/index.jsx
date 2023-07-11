import React from "react";
import classNames from "classnames";

const Button = ({
  onClick,
  label,
  bgColor,
  textColor,
  width,
  height,
  padding,
  border,
  hoverBg,
  borderColor,
  className,
}) => {
  return (
    <button
      className={classNames(
        "hidden md:block px-4 py-2 rounded-full text-sm font-semibold ",
        bgColor || "bg-primary",
        textColor || "text-white",
        width || "w-32",
        height || "h-10",
        padding || "px-4",
        border,
        hoverBg,
        borderColor,
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
