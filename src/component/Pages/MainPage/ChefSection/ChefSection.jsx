import React from "react";

const ChefSection = () => {
  return (
    <div className="md:pb-20 md:pt-10 px-3 mx-0 md:mx-28">
        {/* decoration */}
      <div className="flex items-center justify-center my-6">
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 mr-2">
          {" "}
        </div>
        <p
          style={{ fontFamily: "Dancing Script, cursive" }}
          className="text-xl font-bold"
        >
          chef section
        </p>
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 ml-2">
          {" "}
        </div>
      </div>
        
    </div>
  );
};

export default ChefSection;
