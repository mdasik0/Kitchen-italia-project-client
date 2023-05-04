import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefSection = ({ data }) => {
  const { chef_img, experience, name, numbers_of_recipe, _id } = data;
  return (
    <div>
      {/* chef cards */}

      <div className="card h-96 card-side border-2 border-red-300  shadow-xl">
        {/* image here */}
        <figure className="rounded p-2">
          <LazyLoad className="object-fit" height={500}>
            <img
            // style={{width:'500px'}}
              className="object rounded-lg hover:h-2/3 duration-500 h-full"
              src={chef_img}
              alt="Movie"
            />
          </LazyLoad>
        </figure>

        {/* body here */}
        <div className="card-body">
          <h2 className="font-extrabold text-xl">{name}</h2>
          <p className="text-sm font-bold text-slate-500">
            Years of Experience: {experience}
          </p>
          <p className="text-sm font-bold text-slate-500">
            Numbers of recipe: {numbers_of_recipe}{" "}
          </p>
          <div className="card-actions ">
            <p className="flex items-center text-sm font-bold">
              <FaThumbsUp className="mr-1" /> likes:10,345
            </p>
            <Link to={`/chefRecipes/${_id}`}>
              <button className="bg-red-500 hover:bg-red-200 duration-200 text-white hover:text-red-600 text-sm font-bold px-3 py-1 rounded">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
