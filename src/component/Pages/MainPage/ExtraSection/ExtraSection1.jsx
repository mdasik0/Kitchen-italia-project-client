import React from "react";
import { FaRegHeart, FaRegClipboard } from "react-icons/fa";

const ExtraSection1 = () => {
  return (
    <div className="md:pb-20 md:pt-10 px-3 mx-0 md:mx-28">
      {/* decoration */}
      <div className="flex items-center justify-center md:mb-20 mb-6 my-6">
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 mr-2">
          {" "}
        </div>
        <p
          style={{ fontFamily: "Dancing Script, cursive" }}
          className="text-xl font-bold"
        >
          Featured Dishes
        </p>
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 ml-2">
          {" "}
        </div>
      </div>
      {/* card section */}
      <div className="grid gap-10 md:grid-cols-3 grid-cols-1 ">
        {/* card 1 */}
        <div className="relative md:my-0 my-16">
          <img className="w-48 h-48 absolute -top-16 right-16 md:right-20 border-8 border-white rounded-full" src="/public/transparent.png" alt="" />
          <div className="bg-slate-200 pt-36 rounded-lg text-center p-10 box-border">
            <h4 className="font-extrabold text-3xl mb-3">Insalata Caprese</h4>
            <p className="text-slate-500 font-bold text-sm mb-6">
              {" "}
              Massimo Bottura / 5,600 likes
            </p>
            <div className="flex justify-center mt-10 gap-16">
              <div className="text-yellow-600 text-xl">
                <FaRegHeart></FaRegHeart>
              </div>
              <div className="text-green-600 text-xl">
                <FaRegClipboard></FaRegClipboard>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:my-0 my-16">
          <img className="w-48 h-48 absolute -top-16 right-16 md:right-20 border-8 border-white rounded-full" src="/public/transparent2.png" alt="" />
          <div className="bg-slate-200 pt-36 rounded-lg text-center p-10 box-border">
            <h4 className="font-extrabold text-3xl mb-3">broccoli e formaggio</h4>
            <p className="text-slate-500 font-bold text-sm mb-6">
              {" "}
              Fabio Viviani  / 3,60,000 likes
            </p>
            <div className="flex justify-center mt-10 gap-16">
              <div className="text-yellow-600 text-xl">
                <FaRegHeart></FaRegHeart>
              </div>
              <div className="text-green-600 text-xl">
                <FaRegClipboard></FaRegClipboard>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:my-0 my-16">
          <img className="w-48 h-48 absolute -top-16 right-16 md:right-20 border-8 border-white rounded-full" src="/public/transparent3.png" alt="" />
          <div className="bg-slate-200 pt-36 rounded-lg text-center p-10 box-border">
            <h4 className="font-extrabold text-3xl mb-3">Pollo Avocado</h4>
            <p className="text-slate-500 font-bold text-sm mb-6">
              {" "}
              Carlo Cracco  / 60,556 likes
            </p>
            <div className="flex justify-center mt-10 gap-16">
              <div className="text-yellow-600 text-xl">
                <FaRegHeart></FaRegHeart>
              </div>
              <div className="text-green-600 text-xl">
                <FaRegClipboard></FaRegClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card 1 */}
    </div>
  );
};

export default ExtraSection1;
