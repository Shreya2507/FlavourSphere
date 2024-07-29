import React from "react";

const OurServices = () => {
  const serviceLists = [
    {
      id: 1,
      title: "ZERO HUNGER",
      des: "promoting food security, and ensuring that everyone has access to nutritious food.",
      img: "/images/home/services/icon1.png",
    },
    {
      id: 2,
      title: "FOOD DISTRIBUTION",
      des: "Distribute Meals to Those in Need, and Share Handy Recipes Worldwide!",
      img: "/images/home/services/icon2.png",
    },
    {
      id: 3,
      title: "SECRET RECIPES",
      des: "exclusive recipes that users can try at home with handy Ingredients",
      img: "/images/home/services/icon3.png",
    },
    {
      id: 4,
      title: "JOY OF SHARING",
      des: "Experience the Joy of Giving and Receiving with FlavourSphere",
      img: "/images/home/services/icon4.png",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] max-w-screen-2xl container mx-auto xl:px-24 px-4 my-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services </h2>

            <p className="my-5 text-[#6A6868] leading-[32px] font-medium">
              We believe in the power of food to bring people together, not just
              around the table, but also through shared recipes and generosity.
            </p>
            <button className="btn bg-[#D95B5B] text-white px-8 py-3 rounded-full border-none">
              Explore
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-[#EFA765] cursor-pointer hover:border hover:border-[#d95b5b] transition-all duration-200"
              >
                <img src={service.img} alt="" className=" mx-auto" />
                <h5 className="pt-3 font-semibold text-puce">
                  {" "}
                  {service.title}
                </h5>
                <p className="text-[#FAC08A]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
