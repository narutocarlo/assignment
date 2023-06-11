import React from "react";

function CustomRadioButton({ label, labelClasses, inputClasses, ...props }) {
  return (
    <div>
      <div class="flex items-center p-1 ">
        <input
          id="terms-checkbox"
          type="radio"
          className={`form-radio cursor-pointer h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ${inputClasses}`}
          {...props}
        />
        <label
          for="terms-checkbox"
          className={`ml-2 block text-sm leading-5 text-gray-900 ${labelClasses}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default CustomRadioButton;
