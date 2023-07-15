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
  activeBg,
  borderColor,
  className,
  button1Disabled,
  button2Disabled,
}) => {
  return (
    <button
      className={classNames(
        "md:block px-4 py-2 rounded-full text-sm font-semibold",
        bgColor || "bg-primary",
        textColor || "text-white",
        width || "w-32",
        height || "h-10",
        padding || "px-4",
        border,
        hoverBg,
        activeBg,
        borderColor,
        button1Disabled ? "bg-primary" : bgColor,
        button2Disabled ? "bg-primary" : bgColor,
        className
      )}
      onClick={onClick}
      disabled={button1Disabled}
    >
      {label}
    </button>
  );
};

export default Button;
