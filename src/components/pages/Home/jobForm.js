import React from "react";
import { Formik, Form } from "formik";
import FormikInput from "../../partial/FormikInput";
import { styled } from "styled-components";
import CustomButton from "../../partial/customButton";
import CustomRadioButton from "../../partial/customRadio";
import { useNavigate } from "react-router-dom";


function JobForm() {
  const router = useNavigate()
  return (
    <div>
      <Formik
        initialValues={{
          activeStep: 1,
          jobTitle: "",
          companyName: "",
          industry: "",
          location: "",
          remoteType: "",
          experience: {
            minimum: "",
            maximumL: "",
          },
        }}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <div className="flex mb-6 justify-between text-default font-semibold text-xl  ">
                  <p>Create a job</p>
                  <p>Step {formik.values.activeStep}</p>
                </div>
                {formik.values.activeStep === 1 && (
                  <div>
                    <FormikInput
                      name="jobTitle"
                      isRequried
                      placeholder="ex. UX Designer"
                      label="Job Title"
                    />
                    <FormikInput
                      name="companyName"
                      isRequried
                      placeholder="ex. Google"
                      label="Company Name"
                    />
                    <FormikInput
                      name="industry"
                      isRequried
                      placeholder="ex. Information technology"
                      label="Industry"
                    />
                    <div className=" grid grid-cols-2 gap-4	">
                      <FormikInput
                        name="location"
                        
                        placeholder="ex. Chennai"
                        label="Location"
                      />
                      <FormikInput
                        name="remoteType"
                        
                        placeholder="ex. in-office"
                        label="Remote Type"
                      />
                    </div>
                  </div>
                )}

                {formik.values.activeStep === 2 && (
                  <div>
                    <div className=" grid grid-cols-2 gap-4	">
                      <FormikInput
                        name="experience.minimum"
                        placeholder="Minimum"
                        label="Experience"
                      />
                      <FormikInput
                        name="experience.maximum"
                        placeholder="Maximum"
                      />
                    </div>
                    <div className=" grid  grid-cols-2 gap-4	">
                      <FormikInput
                        name="salary.minimum"
                        placeholder="Minimum"
                        label="Salary"
                      />
                      <FormikInput
                        name="experience.maximum"
                        placeholder="Maximum"
                      />
                    </div>
                    <FormikInput
                      name="industry"
                      placeholder="ex. Information technology"
                      label="Industry"
                    />
                    <div className="flex " >
                      <CustomRadioButton label={"Quick Apply"} />
                      <CustomRadioButton label={"External Apply"} />
                    </div>
                  </div>
                )}
                {formik.values.activeStep === 1 && (
                  <div className="mt-16 flex justify-end">
                    <div className="w-20">
                      <CustomButton
                        buttonName={"Next"}
                        type={"button"}
                        onClick={() => formik.setFieldValue("activeStep", 2)}
                      />
                    </div>
                  </div>
                )}
                {formik.values.activeStep === 2 && (
                  <div className="mt-16 flex justify-end">
                    <div className="w-20">
                      <CustomButton
                        buttonName={"Save"}
                        type={"button"}
                        onClick={() => router('job')}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default JobForm;
