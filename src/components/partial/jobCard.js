import React from "react";
import image from "../../assets/Netflix_icon.svg.png";
import CustomButton from "./customButton";
function JobCard({ jobData }) {
  return (
    <div className="bg-white w-[700px]   border-[#e6e6e6]  rounded-lg  p-6">
      <div className="flex  space-x-3">
        <div className="h-[60px] w-[60px] ">
          <img src={image} alt="" />
        </div>
        <div>
          <div class="text-xl font-bold mb-1">{jobData.jobTitle}</div>
          <p class=" mb-1  font-[600] ">{jobData.companyName}</p>
          <p class=" mb-3 text-lig ">
            {jobData.location} ({jobData.remoteType}){" "}
          </p>
          <p class="font-[600] mb-2">
            {jobData.jobType} ({jobData.jobTime.start} - {jobData.jobTime.end}{" "}
            IST)
          </p>
          <p class="font-[600] mb-2">
            Experience ({jobData.experience.min} - {jobData.experience.max}{" "}
            years)
          </p>
          <p class="font-[600] mb-2">
            INR (₹) {jobData.salary.min} - {jobData.salary.max} / Month
          </p>
          <p class="font-[600] mb-3">
            {jobData.employees.min}-{jobData.employees.max} employees{" "}
          </p>
          <div className="flex   space-x-3">
            {jobData.quickApply && (
              <div className="w-28">
                <CustomButton buttonName={"Apply now"} />
              </div>
            )}
            {jobData.externalApply && (
              <div>
                <CustomButton
                  variant="outlined"
                  buttonName={"External Apply"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
