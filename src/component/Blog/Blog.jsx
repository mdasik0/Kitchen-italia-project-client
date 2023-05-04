import React from "react";

const Blog = () => {
  return (
    <div className="text-md:pb-6 md:pt-10 gap-5 flex flex-col px-3 mx-0 md:mx-28">
      <div className="p-6 border-2 mb- border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          Tell us the differences between uncontrolled and controlled
          components.?
        </h1>
        <p className="text-sm font-bold">
          In an uncontrolled component, the form elements rely on native DOM
          events, such as onChange, onBlur, and onSubmit, to handle the user
          input and to update the form state. But in an controlled component,
          the component does not manage its own state internally, but relies on
          its parent component to provide the state and update it as needed.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          How to validate React props using PropTypes
        </h1>
        <p className="text-sm font-bold">
          First, you need to install PropTypes as a dependency in your
          project.Once you have installed PropTypes, you need to import it into
          your React component.After importing PropTypes, you need to define
          propTypes for your component. You can do this by adding a static
          propTypes object to your component class. Once you have defined
          propTypes for your component, React will automatically validate the
          props passed to your component against the propTypes you have defined.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          Tell us the difference between nodejs and express js.
        </h1>
        <p className="text-sm font-bold">
          Node.js is a JavaScript runtime that allows developers to run
          JavaScript code outside of a web browser, on the server-side.It
          provides an event-driven, non-blocking model that makes it efficient
          and lightweight for building scalable network applications.Express.js,
          on the other hand, is a web framework built on top of Node.js. It
          provides a set of tools and features that make it easier to build web
          applications, api, and middleware. express.js provides a simple and
          intuitive interface for defining routes, handling requests and
          responses, and managing middleware.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="text-sm font-bold">
          n React, a custom hook is a JavaScript function that starts with the
          prefix "use" and follows the rules of the React Hook API. A custom
          hook allows you to encapsulate reusable logic and stateful behavior
          that can be shared across multiple components. Custom hooks help to
          keep your code D. r. Y. (Don't Repeat Yourself) and enable you to write
          modular and composable code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
