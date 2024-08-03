import React from 'react'
import { Link } from 'react-router-dom';

const Doner = () => {
    return (
      <div className=" bg-doner-gradient max-w-screen-2xl container mx-auto xl:px-24 px-4 pt-20 mb-20 mt-10 ">
        <div className="  flex-col items-center justify-between ">
          <h2 className="title text-center mx-auto text">
            Find What You’re Seeeking{" "}
          </h2>
          <p className="my-5 text-[#6A6868] leading-[32px] font-medium mx-auto text-center">
            Our platform is designed to connect passionate cooks with those in
            need, creating a bridge between recipe enthusiasts and food donors.
          </p>
          <div className="flex flex-row items-center justify-center ">
            <Link to="/Aportal">
              <button className="mx-10 btn hover:bg-[#ba4545] hover:border-none rounded-full border-none bg-[#D95B5B] text-white px-8 py-3 rounded-full border-none">
                Acceptor
              </button>
            </Link>

            <Link to="/Donationportal">
              <button className="mx-10 btn hover:bg-[#ba4545] hover:border-none rounded-full border-none bg-[#D95B5B] text-white px-8 py-3 rounded-full border-none">
                Donor
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Doner
