import React from "react";
import JobCard from "../../components/partial/jobCard";
import { jobData } from "../../staticData/jobInformation";

const randomArr = [1, 2, 3, 4];
function Job() {
  return (
    <div className="bg-white2 justify-center  items-center h-screen flex">
      <div className="  bg-lighgrey flex flex-wrap overflow-auto w-[100%] h-[100vh] justify-between px-8 py-4 ">
        {jobData?.map((data, indx) => {
          return (
            <div className="mt-2">
              <JobCard key={data.id} jobData={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Job;
