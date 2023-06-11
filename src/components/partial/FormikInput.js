import React from "react";
import CustomInput from "./customInput";
import { useField } from "formik";

function FormikInput({ ...props }) {
  const [field] = useField(props);

  return (
    <div>
      <CustomInput {...field} {...props} />
    </div>
  );
}

export default FormikInput;
