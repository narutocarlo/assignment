import React from "react";

function CustomInput({
  label,
  isRequried = false,
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <div className="mb-4">
        {label ? (
          <label
            className="block text-gray-700  text-default font-semibold mb-2"
            htmlFor={label}
          >
            {label}{" "}
            <label className="text-error    ">{isRequried && "*"}</label>
          </label>
        ) : (
          <div className="block mt-8" />
        )}
        <input
          className="  border  rounded w-full py-2 px-3 font leading-tight focus:outline-none  focus:shadow-outline"
          id={label}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
}

export default CustomInput;
