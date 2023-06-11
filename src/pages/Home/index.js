import React from "react";
import JobForm from "../../components/pages/Home/jobForm";
import CustomInput from "../../components/partial/customInput";
import FormikInput from "../../components/partial/FormikInput";
import FormLayOut from "../../layouts/formLayOut";

export default function Home() {
  return (
    <div className="flex h-screen bg-white2 h-screen justify-center items-center " >
      <FormLayOut>
        <JobForm />x
      </FormLayOut>
    </div>
  );
}
