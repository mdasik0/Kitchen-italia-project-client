import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaRegPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center my-6">
        <div style={{ height: "1px" }} className=" w-32 bg-slate-100 mr-2">
          {" "}
        </div>
        <p
          style={{ fontFamily: "Dancing Script, cursive" }}
          className="text-xl text-white font-bold"
        >
          footer
        </p>
        <div style={{ height: "1px" }} className=" w-32 bg-slate-100 ml-2">
          {" "}
        </div>
      </div>

      {/* footer data here  */}
      <div className="md:pb-10 md:pt-10 flex md:flex-row flex-col justify-between items-center px-3 mx-0 md:mx-28">
        
        {/* 2nd one */}
        <div className="my-3  flex md:flex-row flex-col text-center md:text-start">
          <img
            className="w-48 md:mb-0 mb-3 mr-2 h-48 object-cover rounded-lg"
            src="https://cdn.dribbble.com/users/26068/screenshots/14583095/media/17475cb3d2577fb4b67dc8fd1a30d7a0.gif"
            alt=""
          />

          <div>
            <div className="flex items-center mb-2">
              {" "}
              <p className="text-white text-sm font-bold">Social: </p>
              <FaFacebook className="mx-3 text-white"></FaFacebook>
              <FaInstagram className="mr-3 text-white"></FaInstagram>
              <FaGithub className="mr-3 text-white"></FaGithub>
              <FaTwitter className="text-white"></FaTwitter>
            </div>
            <div className="text-white ">
              contact info: +880112458374,
              <br />
              Email: kitchenitalia@gmail.com, <br />
              <span className="text-blue-500 font-bold text-sm">
                Terms & conditions
              </span>{" "}
              <br />
              <button className="bg-red-500 mt-3 hover:bg-red-200 duration-200 text-white hover:text-red-600 text-sm font-bold px-3 py-1 rounded">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* 3rd one */}
        <div className=" text-center md:text-start ">
          <div
            id="logo"
            className="text-red-500 mb-2 text-lg md:text-3xl font-bold"
          >
            Kitchen italia
          </div>
          <div className="flex">
            <div className="border border-slate-400 px-3 py-1 rounded-s-full">
              <input
                className="bg-transparent"
                placeholder="type your email here"
                type="text"
              />
            </div>
            <div className="border border-slate-400 text-white bg-red-600 px-3 py-2 rounded-e-full">
              <FaRegPaperPlane></FaRegPaperPlane>
            </div>
          </div>
          <p className="pt-3 text-white text-sm font-bold">
            Contact us via email and place your order.
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-300 font-bold text-center pb-2 pt-2 md:pb-4 md:pt-3">
        Copyright © 2022 By Asik, All rights reserved. Powered by Kitchen
        italia.
      </p>
    </div>
  );
};

export default Footer;
