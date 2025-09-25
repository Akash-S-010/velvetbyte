import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({ theme = "black", text, onClick, type, width, className }) => {
  const isBlackTheme = theme === "black";

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`group flex ${
        width === "full" ? "w-full" : ""
      } items-center justify-center px-6 py-2 text-md  hover:px-8 transition-all duration-300 cursor-pointer border-2 rounded-tl-xl rounded-br-xl relative hover:rounded-tl-none hover:rounded-br-none 
        ${
          isBlackTheme
            ? "bg-primary text-white border-white hover:bg-white hover:text-black"
            : "bg-primary text-black border-black hover:bg-black hover:text-white"
        } ${className}`}
    >
      {text}
      <span className="inline-block ml-4 group-hover:translate-x-1 transition">
        <MoveRight size={16}/>
      </span>
    </button>
  );
};

export default Button;
