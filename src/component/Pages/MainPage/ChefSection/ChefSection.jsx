import React from "react";
import { FaThumbsUp } from 'react-icons/fa';


const ChefSection = () => {
  return (
    <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28">
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
      {/* chef card container */}
      <div className="grid mb-3 md:mb-10 grid-cols-1 md:grid-cols-3">
        {/* chef cards */}

        <div className="card card-side border-2 border-red-300  shadow-xl">
          <figure className="rounded p-2">
            <img className="object-fit rounded-lg hover:h-2/3 duration-500 h-full"
              src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-extrabold text-xl">Mark pieere</h2>
            <p className="text-sm font-bold text-slate-500">Years of Experience: 30 Years</p>
            <p className="text-sm font-bold text-slate-500">Numbers of recipe: 30+ </p>
            <div className="card-actions ">
                <p className="flex items-center text-sm font-bold"><FaThumbsUp className="mr-1" /> likes:10,345</p>
              <button className="bg-red-500 hover:bg-red-200 duration-200 text-white hover:text-red-600 text-sm font-bold px-3 py-1 rounded">Watch</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ChefSection;
