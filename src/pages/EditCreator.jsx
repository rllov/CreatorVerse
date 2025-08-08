import React, { useState } from "react";
import supabase from "../client"; // Import Supabase client

function EditCreator({ creator = {}, onUpdateCreator }) {
  const [formData, setFormData] = useState(creator);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from("Creators")
        .update(formData)
        .eq("id", creator.id);

      if (error) {
        console.error("Error updating creator:", error);
        alert("Failed to update creator.");
      } else {
        alert("Creator updated successfully!");
        onUpdateCreator(creator.id, formData); // Update local state if needed
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Edit Creator</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-white font-medium mb-2">
            URL
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={formData.url || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-white font-medium mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-white font-medium mb-2"
          >
            Image URL
          </label>
          <input
            type="url"
            name="imageURL"
            id="imageURL"
            value={formData.imageURL || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Creator
        </button>
      </form>
    </div>
  );
}

export default EditCreator;
