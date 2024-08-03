import React, { useEffect } from "react";

const donationLocations = [
  {
    id: 1,
    location: "123 Main St, New York",
    infoAbout: "Canned food",
    cooked: "Yes",
    time: "12:00 PM",
    types: "Vegetarian",
    expiry: "2024-08-10",
    name: "John Doe",
    contact: "123-456-7890",
  },
  {
    id: 2,
    location: "456 Oak St, Los Angeles",
    infoAbout: "Baked goods",
    cooked: "No",
    time: "10:00 AM",
    types: "Gluten-free",
    expiry: "2024-08-05",
    name: "Jane Smith",
    contact: "987-654-3210",
  },
  {
    id: 3,
    location: "789 Pine St, Chicago",
    infoAbout: "Fresh vegetables",
    cooked: "No",
    time: "2:00 PM",
    types: "Organic",
    expiry: "2024-08-07",
    name: "Alice Johnson",
    contact: "456-789-1234",
  },
  {
    id: 4,
    location: "101 Maple St, Houston",
    infoAbout: "Frozen meals",
    cooked: "Yes",
    time: "1:00 PM",
    types: "Non-Vegetarian",
    expiry: "2024-08-08",
    name: "Robert Brown",
    contact: "321-654-9870",
  },
  {
    id: 5,
    location: "202 Elm St, Phoenix",
    infoAbout: "Dairy products",
    cooked: "No",
    time: "11:00 AM",
    types: "Organic",
    expiry: "2024-08-09",
    name: "Emily Davis",
    contact: "789-012-3456",
  },
  {
    id: 6,
    location: "303 Birch St, Philadelphia",
    infoAbout: "Dry goods",
    cooked: "No",
    time: "9:00 AM",
    types: "Non-Perishable",
    expiry: "2024-08-15",
    name: "Michael Wilson",
    contact: "654-321-0987",
  },
  {
    id: 7,
    location: "404 Cedar St, San Antonio",
    infoAbout: "Beverages",
    cooked: "No",
    time: "3:00 PM",
    types: "Juices",
    expiry: "2024-08-12",
    name: "Jessica Martinez",
    contact: "234-567-8901",
  },
  {
    id: 8,
    location: "505 Walnut St, San Diego",
    infoAbout: "Snacks",
    cooked: "No",
    time: "4:00 PM",
    types: "Chips",
    expiry: "2024-08-11",
    name: "David Lee",
    contact: "345-678-9012",
  },
  {
    id: 9,
    location: "606 Chestnut St, Dallas",
    infoAbout: "Packaged meals",
    cooked: "Yes",
    time: "5:00 PM",
    types: "Vegetarian",
    expiry: "2024-08-13",
    name: "Sarah Anderson",
    contact: "456-789-0123",
  },
  {
    id: 10,
    location: "707 Spruce St, San Jose",
    infoAbout: "Grains",
    cooked: "No",
    time: "6:00 PM",
    types: "Rice",
    expiry: "2024-08-14",
    name: "Christopher Jackson",
    contact: "567-890-1234",
  },
];

const AcceptorPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-3 py-20 bg-custom-gradient min-h-screen">
     
      <div className="py-20 flex flex-col justify-between items-center gap-3">
        <div className="space-y-7 bg-red-500 opacity-80 p-6 rounded-lg">
          <h2 className="text-navbarBg md:text-3xl text-2xl  font-bold md:leading-snug leading-snug">
            The Acceptor's Portal{" "}
            <span className="text-yellow">Accepting Contributions</span>
          </h2>
        </div>
        <div>
          <img
            src="/images/AcceptorPortal/Acceptor3.png"
            alt="Donation Portal"
            className="w-[500px] h-[500px] flex justify-center mt-10 "
          />
        </div>
      </div>

      <div className="overflow-x-auto flex justify-center mb-20 mt-0">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="bg-[#f9c300] text-gray-500">ID</th>
              <th className="bg-[#f9c300] text-gray-500">Location</th>
              <th className="bg-[#f9c300] text-gray-500">Info About</th>
              <th className="bg-[#f9c300] text-gray-500">Cooked</th>
              <th className="bg-[#f9c300] text-gray-500">Time</th>
              <th className="bg-[#f9c300] text-gray-500">Types</th>
              <th className="bg-[#f9c300] text-gray-500">Expiry</th>
              <th className="bg-[#f9c300] text-gray-500">Name</th>
              <th className="bg-[#f9c300] text-gray-500">Contact</th>
            </tr>
          </thead>
          <tbody>
            {donationLocations.map((location) => (
              <tr key={location.id}>
                <td className="bg-[#e4a9a9] text-gray-800">{location.id}</td>
                <td className="bg-[#ecc6c6] text-white">{location.location}</td>
                <td className="bg-[#e4a9a9] text-gray-800">
                  {location.infoAbout}
                </td>
                <td className="bg-[#ecc6c6] text-white">{location.cooked}</td>
                <td className="bg-[#e4a9a9] text-gray-800">{location.time}</td>
                <td className="bg-[#ecc6c6] text-white">{location.types}</td>
                <td className="bg-[#e4a9a9] text-gray-800">
                  {location.expiry}
                </td>
                <td className="bg-[#ecc6c6] text-white">{location.name}</td>
                <td className="bg-[#e4a9a9] text-gray-800">
                  {location.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptorPortal;
