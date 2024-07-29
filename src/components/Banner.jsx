import React from "react";

const Banner = () => {
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 py-10 bg-custom-gradient min-h-screen">
      <div className="py-20 flex justify-between items-center gap-6">
        {/* images */}
        <div className="md:w-1/2 xl:w-1/2 flex justify-center">
          <img src="/images/home/banner.png"></img>
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="text-navbarBg md:text-5xl text-2xl font-bold md:leading-snug leading-snug">
            Dive into The Joy of{" "}
            <span className="text-yellow">Giving and Savor the taste</span>
          </h2>
          <p className="text-xl text-headingGrey">
            Where Every Recipe Tells a Story and Every Meal Makes a Difference
          </p>
          <button className="btn bg-button px-8 py-3 font-semibold text-white rounded-full border-none shadow-lg ">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
