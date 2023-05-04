import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import ChefSection from "./ChefSection/ChefSection";
import ExtraSection1 from "./ExtraSection/ExtraSection1";
import ExtraSection2 from "./ExtraSection/Extrasection2/ExtraSection2";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefDetails")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <MainHeader></MainHeader>
      {/* decoration */}

      <div className="flex items-center justify-center md:mb-20 mb-6 my-6">
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

      {/* chef section */}
      <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28">
        <div className="grid mb-3 md:mb-10 gap-3 grid-cols-1 md:grid-cols-3">
          {data.map((singleData) => (
            <ChefSection key={singleData._id} data={singleData}></ChefSection>
          ))}
        </div>
      </div>
        {/* extra 2 section */}
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default MainPage;
