import React from "react";

function FormLayOut({ children, ...props }) {
  return (
    <div
      className="border w-[577px] bg-white h-[564px] rounded-lg p-8 "
      {...props}
    >
      {children}
    </div>
  );
}

export default FormLayOut;
