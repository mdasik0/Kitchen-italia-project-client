import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error.status, "this is data", error.data);
  return (
    <div>
      <div className="flex items-center justify-center my-20">
        <div className="relative">
          <img src="/cooking-errorPage.jpg" alt="" />
          <div className="bottom-20 left-20  absolute">
            <Link to="/">
              <button className="px-10 py-4 bg-transparent text-transparent  rounded bg-red-500 text-white font-bold text-sm ">
                home
              </button>
            </Link>
          </div>
          <div className="absolute m-4 text-white text-xl font-extrabold left-5 top-10">
            <div>{error.data}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
