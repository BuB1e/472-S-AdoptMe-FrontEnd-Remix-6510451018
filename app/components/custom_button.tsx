import { Link } from "@remix-run/react";
import {
  MouseEventHandler,
} from "react";

interface props {
  text: string;
  destination: string;
  color: string;
  click?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  noRedirect?: boolean;
}

export default function CustomButton({
  text,
  destination,
  color,
  disabled,
  click,
  noRedirect,
}: props) {
  if (disabled == true) {
    color = "bg-gray-400";
  }

  return (
    <Link
      to={destination}
      prefetch="intent"
      onClick={(e) => {
        if (noRedirect) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="button"
        onClick={click}
        disabled={disabled}
        className={`flex flex-row hover:scale-110 duration-200 space-x-2 text-white font-bold shadow-lg 
            ${color} rounded-3xl text-2xl justify-center items-center w-fit h-fit px-6 py-2`}
      >
        <h1>{text}</h1>
      </button>
    </Link>
  );
}
