import React, { useState } from "react";


const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-20 px-4 py-10 mt-20 bg-custom-gradient min-h-screen">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-lg justify-center items-center ">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-lg font-medium text-gray-700">
                Name
              </span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-lg font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text text-lg font-medium text-gray-700">
                Message
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a Message here . . ."
              className="textarea textarea-bordered w-full h-32 bg-gray-100"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-gray-700  "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
