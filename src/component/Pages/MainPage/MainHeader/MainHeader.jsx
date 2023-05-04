import React from "react";

const MainHeader = () => {
  return (
    <div className="md:pb-20 md:pt-10 px-10 mx-0 md:mx-28">
      <div className="flex md:flex-row flex-col justify-between items-center ">
        <div
          style={{ lineHeight: "60px" }}
          className="text-4xl font-extrabold my-10 line"
        >
          <span className="text-red-500">Unleash</span> <br /> your inner <br />{" "}
          <span className="text-slate-600">Italian Chef !!!</span>
          <div>
            <p className="text-sm fontbold w-2/3">Bringing the taste of Italy to your kitchen. Explore new flavors, techniques, and ingredients with our rich collection of recipes and resources</p>
          </div>
        </div>
        <div className="relative mt-10 mb-24 ">
          <img style={{width:'15rem',height:'15rem'}}
            className=" shadow-xl shadow-black object-cover absolute top-11 right-11 md:top-20 md:right-24 image-full rounded-lg "
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=1"
            alt=""
          />
          <img
            className=" image-full rounded-lg "
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
