import React, { useEffect } from "react";

const donationLocations = [
  {
    id: 1,
    group: "Charity A",
    address: "123 Main St",
    city: "New York",
    review: "4.5",
    reach: "1000",
  },
  {
    id: 2,
    group: "Charity B",
    address: "456 Oak St",
    city: "Los Angeles",
    review: "4.0",
    reach: "1500",
  },
  {
    id: 3,
    group: "Charity C",
    address: "789 Pine St",
    city: "Chicago",
    review: "3.8",
    reach: "8000",
  },
  {
    id: 4,
    group: "Charity D",
    address: "101 Maple St",
    city: "Houston",
    review: "4.7",
    reach: "1200",
  },
  {
    id: 5,
    group: "Charity E",
    address: "202 Elm St",
    city: "Phoenix",
    review: "4.2",
    reach: "9000",
  },
  {
    id: 6,
    group: "Charity F",
    address: "303 Birch St",
    city: "Philadelphia",
    review: "3.9",
    reach: "1100",
  },
  {
    id: 7,
    group: "Charity G",
    address: "404 Cedar St",
    city: "San Antonio",
    review: "4.4",
    reach: "1400",
  },
  {
    id: 8,
    group: "Charity H",
    address: "505 Walnut St",
    city: "San Diego",
    review: "4.6",
    reach: "1300",
  },
  {
    id: 9,
    group: "Charity I",
    address: "606 Chestnut St",
    city: "Dallas",
    review: "3.7",
    reach: "7000",
  },
  {
    id: 10,
    group: "Charity J",
    address: "707 Spruce St",
    city: "San Jose",
    review: "4.3",
    reach: "1600",
  },
];

const DonationPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-3 py-10 bg-custom-gradient min-h-screen">
      <div className="py-20 flex flex-row justify-between items-center gap-3">
        {/* images */}
        <div className="flex justify-center">
          <img
            src="/images/DonationPortal/img.png"
            alt="Donation Portal"
            className="w-1/2 h-auto md:w-1/2 xl:w-1/2 sm:w-1/2 lg:w-1/4 hidden sm:block"
          />
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-10 p-6 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 shadow-lg">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 p-4 rounded-xl flex items-center">
            <h2 className="text-2xl font-thinbold md:leading-snug leading-snug text-center text-red-900">
              Hello Sarah!
            </h2>
          </div>
          <h2 className="text-navbarBg md:text-5xl text-2xl font-bold md:leading-snug leading-snug">
            Have Some Left Over Food{" "}
            <span className="text-yellow">Worry NOT</span>
          </h2>

          <p className="text-xl text-[#A81906] text-center">Donate Them Here</p>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra ">
          <thead>
            <tr>
              <th className="bg-[#f9c300]"></th>
              <th className="bg-[#f9c300] text-gray-500">Group</th>
              <th className="bg-[#f9c300] text-gray-500">Address</th>
              <th className="bg-[#f9c300] text-gray-500">City</th>
              <th className="bg-[#f9c300] text-gray-500">Review</th>
              <th className="bg-[#f9c300] text-gray-500">Reach</th>
              <th className="bg-[#f9c300] text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {donationLocations.map((location, index) => (
              <tr
                key={location.id}
                className={index % 2 === 0 ? "bg-[#ecc6c6]" : "bg-yellow-200"}
              >
                <th className="bg-button text-gray-300">{index + 1}</th>
                <td className="bg-[#e4a9a9] text-gray-800">{location.group}</td>
                <td className="bg-[#e4a9a9] text-gray-800">
                  {location.address}
                </td>
                <td className="bg-[#e4a9a9] text-gray-800">{location.city}</td>
                <td className="bg-[#ecc6c6] text-gray-100">
                  {location.review}
                </td>
                <td className="bg-[#e4a9a9] text-gray-800">{location.reach}</td>
                <td className="bg-[#e4a9a9] text-gray-800">
                  <button className="btn btn-sm bg-button hover:bg-[#ba4545] hover:border-none rounded-full border-none px-6 text-white gap-2">
                    Donate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationPortal;
