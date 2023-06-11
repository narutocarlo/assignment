import React from "react";

function CustomButton({ buttonName, variant = "contained", ...props }) {
  return (
    <div>
      {variant == "contained" && (
        <button
          type="submit"
          className="w-full rounded bg-primary text-white py-1.5 text-lg "
          {...props}
        >
          {buttonName}
        </button>
      )}
      {variant == "outlined" && (
        <button
          type="submit"
          className="border border-blue-500 text-primary rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-primary hover:text-white"
          {...props}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
}

export default CustomButton;
