import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ColorRing } from "react-loader-spinner";

const ChefDetails = () => {
  // recipe data here
  const [recipeData, setRecipeData] = useState([]);
  const [state, setState] = useState(true);

  const handleClick = (name) => {
    toast(`"${name}" is my favourite dish`);
    setState(true);
  };
  useEffect(() => {
    fetch("http://localhost:5000/recipeDetails")
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, []);

  const chefDetails = useLoaderData();


  //   chef details here

  const { _id, bio, chef_img, experience, name, numbers_of_recipe, recipe_id } =
    chefDetails;

  const RData = recipeData.filter((r) => r.recipe_id === recipe_id);

  // map the recipes
  return (
    <div>
      {/* spinner / loader */}
      <div
        id="spinner"
        className={`flex justify-center ${recipeData.length ? "hidden" : "block"}`}
      >
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
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
              <h4 className="text-4xl font-extrabold text-red-600 ">{name}</h4>
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
        {RData.map((recipe) => (
          <div
            key={recipe.id}
            className="card w-96 border-2 border-red-400 bg-red-100  rounded-lg shadow-xl"
          >
            <figure>
              <img
                style={{ width: "410px" }}
                className="h-56 rounded-lg object-cover m-2"
                src={recipe.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl text-red-500 font-extrabold ">
                {recipe.name}
              </h2>
              {/* data start */}
              <div className="collapse py-1 ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-red-200 font-bold rounded-t-lg text-slate-800 peer-checked:bg-slate- peer-checked:text-slate-800">
                  Click to see cooking recipe
                </div>
                <div className="collapse-content bg-red-200 text-primary-content peer-checked:bg-red-300 pt-3 rounded-b-lg peer-checked:text-slate-800">
                  <p className="text-sm font-bold">{recipe.cooking_process}</p>
                </div>
              </div>
              {/* data end */}
              <p className="font-bold text-sm">ingredients :</p>
              <ul className="font-bold list-disc list-inside text-sm">
                <li>{recipe.ingredients[0]}</li>
                <li>{recipe.ingredients[1]}</li>
                <li>{recipe.ingredients[2]}</li>
                <li>{recipe.ingredients[3]}</li>
                <li>{recipe.ingredients[4]}</li>
              </ul>
              <p className="text-sm font-bold">{recipe.description}</p>

              <div className="card-actions items-center justify-between">
                <div className="flex">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={parseInt(recipe.rating)}
                    readOnly
                  />
                  <p className="text-sm ml-1 font-bold">{recipe.rating}</p>
                </div>
                <div
                  onClick={() => handleClick(recipe.name)}
                  className={`text-red-500 bg-red-200 btn  border-none cursor-pointer text-xl ${
                    !state ? "btn-disabled" : "btn"
                  }`}
                >
                  <FaHeart></FaHeart>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
