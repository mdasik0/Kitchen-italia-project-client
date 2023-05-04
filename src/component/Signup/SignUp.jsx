import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SignUp = () => {
  const { createUser,googleSignin,gitHubSignin } = useContext(AuthContext);
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const handleGoogleSignIn = () => {
    googleSignin()
    .then((result) => {
      const user = result.user;
      console.log(user);})
    .catch(error => console.error(error))
  }
  const handleGitHubSignIn = () => {
    gitHubSignin()
    .then((result) => {
      const user = result.user;
      console.log(user);})
    .catch(error => console.error(error))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/signin')
      })
      .catch((error) => {
        setError(error)

      });
      
      setError('')
      // navigate('/signin')
  };
  return (
    <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28 flex justify-center">
      <form
        onSubmit={handleSubmit}
        style={{ width: "450px" }}
        className=""
        action=""
      >
        <h3 className="text-2xl font-extrabold mb-4">Sign up</h3>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="photo"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Photo URL
          </label>
        </div>
        
        <p className="text-sm">
          {
            <p className="text-red-500 font-bold" id="error">{error.message}</p>
          }
          Already have an account ?{" "}
          <Link
            to="/signin"
            className="underline underline-offset-2 text-blue-600"
          >
            Sign in
          </Link>
        </p>
        <div>
          <input className="btn bg-red-500 mt-4" type="submit" />
        </div>
        <div className="flex flex-col items-center mt-6">
          <div onClick={handleGoogleSignIn} className="cursor-pointer border-2 p-2 w-48 mt-3 text-slate-700 font-bold flex items-center border-slate-300">
            <FaGoogle></FaGoogle>
            <p className="ml-3">Login with Google</p>
          </div>
          <div onClick={handleGitHubSignIn} className="cursor-pointer border-2 p-2 w-48 mt-3 text-slate-700 font-bold flex items-center border-slate-300">
            <FaGithub></FaGithub>
            <p className="ml-3">Login with Github</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
