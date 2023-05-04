import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const { _id, bio, chef_img, experience, name, numbers_of_recipe, recipes } =
    chefDetails;

    console.log(recipes)

  // map the recipes
  return (
    <div>
      {/* chef banner */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(254, 226, 226, 0.493), rgba(0, 0, 0, 0.349)),url('https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1060&t=st=1683170844~exp=1683171444~hmac=6a736e93eb964bdb4f96ee5a90d6078bd386edc82ddf93d638ae6bf744bc6cf4')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
        className="mt-10 p-6"
      >
        <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28">
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <img
                className="h-96 rounded-lg shadow-sm shadow-black"
                src={chef_img}
                alt=""
              />
            </div>
            <div className="md:ml-20 ml-0 ">
              <h4 className="text-4xl font-extrabold text-red-600 ">
                {name}
              </h4>
              <p className="w-96 text-sm font-semibold mt-3">
                <span className="font-extrabold">Bio</span> : {bio}
              </p>
              <p className="w-96 text-sm font-semibold mt-3">
                <span className="font-extrabold">Experience</span> :{" "}
                {experience}
              </p>
              <p className="w-96 text-sm font-semibold mt-3">
                <span className="font-extrabold">Numbers of Recipe</span> :{" "}
                {numbers_of_recipe}
              </p>
              <p className="w-96 text-sm font-semibold mt-3 flex items-center">
                <span className="font-extrabold mr-1">Likes</span> :{" "}
                <FaThumbsUp className="mx-1" /> 10,350
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28 grid md:grid-cols-3 grid-cols-1 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="card w-96 border-2 border-red-400 bg-red-100  rounded-lg shadow-xl">
            <figure>
              <img
                style={{width:'410px'}}
                className="h-56 rounded-lg object-cover m-2"
                src={recipe.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl text-red-500 font-extrabold ">
                {recipe.name}
              </h2>
              <p className="text-sm font-bold">{recipe.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
