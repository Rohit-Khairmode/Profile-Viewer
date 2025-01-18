"use client";
import { ReactNode } from "react";
export enum ButtonTypes {
  General = "text-white px-10 py-6 font-bold text-2xl rounded-lg hover:-translate-y-1 hover:bg-shade1 hover:scale-110 duration-300 bg-black ",
  Edit = "bg-green-400 text-white hover:bg-green-600 ",
  Delete = "bg-red-400 text-white hover:bg-green-600",
  Save = "bg-green-300 text-white hover:bg-green-500",
}

function Button({
  children,
  onClick,
  type,
  className,
}: {
  children: ReactNode;
  onClick: () => void;
  type?: string;
  className?: string;
}) {
  let style =
    ButtonTypes.General ||
    ButtonTypes.Delete ||
    ButtonTypes.Edit ||
    ButtonTypes.Save ||
    "";
  console.log(`  ${style} ${className} `);
  return (
    <button
      onClick={onClick}
      className={` text-white px-4 py-2 px-10 py-6 font-bold text-2xl rounded-lg hover:-translate-y-1 hover:bg-shade1 hover:scale-110 duration-300 bg-black   `}
    >
      {children}
    </button>
  );
}

export default Button;
