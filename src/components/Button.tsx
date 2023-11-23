import React from "react";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ text, type, onClick }: ButtonProps) {
  // const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log("버튼 타입: ", type);
  // };
  return (
    <button
      type={type}
      className="flex items-center justify-center bg-gray-200 py-2 px-3 rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
