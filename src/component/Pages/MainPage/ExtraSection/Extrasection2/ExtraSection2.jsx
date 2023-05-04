import React from "react";

const ExtraSection2 = () => {
  return (
    <div>
      {/* decoration */}
      <div className="flex items-center justify-center md:mb-20 mb-6 my-6">
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 mr-2">
          {" "}
        </div>
        <p
          style={{ fontFamily: "Dancing Script, cursive" }}
          className="text-xl font-bold"
        >
          Message from founder
        </p>
        <div style={{ height: "1px" }} className=" w-32 bg-slate-800 ml-2">
          {" "}
        </div>
      </div>

      {/* section starts here */}
      

      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.863)),url('https://www.healthifyme.com/blog/wp-content/uploads/2021/10/All-About-The-Right-Food-Plate-Method.jpg')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="p-6"
      >
        <div className="md:pb-10 md:pt-10 px-3 mx-0 md:mx-28">
          <h3 className="text-4xl font-extrabold text-slate-700 mb-10">
            Join Us on <br /> a Culinary Adventure
          </h3>
          <p className="text-white mb-10 text-sm text-bold leading-5">
            "Welcome to <div
            id="logo"
            className="text-red-500 inline-block mb-2 text-lg md:text-xl font-bold"
          >
            Kitchen italia
          </div> !!! We're so glad you're here.{" "}
            <br />
            <br />
            Our mission is simple: to help you become a confident, creative, and
            happy cook. We believe that cooking and sharing meals is one of
            life's greatest pleasures, and we're passionate about making it
            accessible to everyone. At our website, you'll find a wide variety
            of recipes that are carefully curated, tested, and designed to be
            delicious, healthy, and satisfying. From quick and easy weeknight
            meals to impressive dinner party dishes, we've got you covered. We
            also feature recipes for special diets, such as vegetarian, vegan,
            gluten-free, and more, so that everyone can enjoy the benefits of
            cooking and eating well. <br />
            <br /> We know that cooking can sometimes be intimidating or
            overwhelming, especially if you're new to the kitchen. That's why
            we're committed to providing clear and easy-to-follow instructions,
            as well as helpful tips and techniques that will make cooking a fun
            and stress-free experience. We want you to feel confident in the
            kitchen, and to enjoy the process of creating something delicious
            from scratch. We're a team of passionate cooks and food lovers, and
            we're dedicated to sharing our knowledge, expertise, and enthusiasm
            with you. Whether you're a beginner or an experienced cook, we hope
            that you'll find our website to be a valuable resource for all your
            cooking needs.
            <br />
            <br />
            Thank you for joining us on this culinary journey. Let's get
            cooking!
          </p>
          <span style={{ fontFamily: "Dancing Script, cursive" }} className="text-4xl font-bold text-white">MD Asik khan</span>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
