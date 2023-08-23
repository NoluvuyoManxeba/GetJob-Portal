import React from "react";
// This component represents a custom button that can have a title, an optional right icon,
// a specified type (defaults to "button"), and a click handler.
const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
  return (
    // Button element with onClick handler and optional type
    <button
      onClick={onClick}
      type={type || "button"}
      className={`inline-flex items-center ${containerStyles}`}
    >
      {title}

      {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
