import React from "react";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <>
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full">
        <h2 className="text-5xl font-bold text-white mb-8">
          Welcome to SkillLinkr Project
        </h2>
        <p className="text-xl text-sky-400 mb-10 max-w-xl">
          A website that brings together professionals seeking to exchange
          skills or find expertise in specific areas.
        </p>
        <Link
          to="/signup"
          className="px-10 py-3 bg-sky-500 text-sky-100 font-bold rounded-lg hover:bg-sky-600 transition"
        >
          View Project
        </Link>
      </div>
    </>
  );
};

export default HeroContent;
