import React from "react";
import JobForm from "../../components/pages/Home/jobForm";
import FormLayOut from "../../layouts/formLayOut";

export default function Home() {
  return (
    <div className="flex  bg-white2 h-screen justify-center items-center ">
      <FormLayOut>
        <JobForm />
      </FormLayOut>
    </div>
  );
}
