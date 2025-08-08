import React, { useState } from "react";
import supabase from "../client";

function AddCreator({ setCreators }) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("Creators").insert([formData]);
    if (error) {
      console.error("Error adding creator:", error);
    } else {
      setCreators((prevCreators) => [...prevCreators, data[0]]);
    }
  };

  return (
    <div className="w-[40%] block mx-auto mt-[50px] p-[20px] text-white rounded-lg shadow-md flex-col">
      <h1>Add New Creator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-[5px] font-[700]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter the creator's name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />

        <label htmlFor="url" className="block mb-[5px] font-[700]">
          Social Media Link
        </label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Enter the creator's social media link"
          value={formData.url}
          onChange={handleChange}
          required
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />

        <label htmlFor="description" className="block mb-[5px] font-[700]">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Provide a description of the creator"
          value={formData.description}
          onChange={handleChange}
          required
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />

        <label htmlFor="imageURL" className="block mb-[5px] font-[700]">
          Image URL (Optional)
        </label>
        <input
          type="url"
          id="imageURL"
          name="imageURL"
          placeholder="Provide a link to an image of the creator"
          value={formData.imageURL}
          onChange={handleChange}
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />
        <label className="block mb-[5px] font-[700]">
          Social Media Handles (Optional)
        </label>
        <input
          type="text"
          name="youtube"
          placeholder="YouTube handle (without @)"
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter handle (without @)"
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram handle (without @)"
          className="mb-[10px] p-[10px] border border-gray-300 bg-white rounded-lg w-full text-black"
        />
        <button
          type="submit"
          className="bg-[rgb(81,133,180)] text-white font-[700] text-[20px] uppercase tracking-[1.3px] h-[3em] rounded-[3px] border border-transparent hover:bg-[rgb(66,74,89)] w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCreator;
