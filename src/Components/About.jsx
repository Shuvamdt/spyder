import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 p-10 m-10">
      <button className="rounded-full p-2 m-2 bg-green-100 sora-400">
        About Optimizer
      </button>
      <h1
        className="font text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide sora-400 p-4"
        style={{ fontSize: 40, color: "white" }}
      >
        We make GitHub workflows faster, smarter, and greener. Our AI optimizes
        CI/CD pipelines to reduce execution time and carbon footprint— so you
        ship code efficiently without extra{" "}
        <span className="solitreo-regular">effort</span>
      </h1>
      <h1 className="" style={{ fontSize: 40, color: "white" }}></h1>
    </div>
  );
};

export default About;
