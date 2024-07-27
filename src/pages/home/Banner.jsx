const Banner = () => {
  return (
    <div className="  container bg-custom-gradient">
      <div className="py-20 flex md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="w-1/2 ">
          <img src="/images/home/Banner.png "></img>
        </div>
        {/* texts */}
        <div className="w-1/2 space-y-7 px-4">
          <h2 className="text-black md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            FlavourSphere
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Every Recipe Tells a Story and Every Meal Makes a Difference
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
