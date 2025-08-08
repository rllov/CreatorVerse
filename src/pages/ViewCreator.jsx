import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client";
import { FaTwitch, FaTwitter, FaYoutube, FaEdit } from "react-icons/fa";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation after deletion
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("Creators")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${creator.name}?`
    );
    if (confirmDelete) {
      const { error } = await supabase.from("Creators").delete().eq("id", id);

      if (error) {
        console.error("Error deleting creator:", error);
        alert("Failed to delete creator.");
      } else {
        alert("Creator deleted successfully!");
        navigate("/creators"); // Navigate back to the creators list
      }
    }
  };

  if (!creator) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <div className="w-1/3 flex flex-col items-center justify-center mb-4 md:mb-0">
          {creator.imageURL && (
            <img
              src={creator.imageURL}
              alt={`${creator.name}`}
              style={{ width: "300px", height: "auto" }}
            />
          )}
          <h1 className="mt-4">{creator.name}</h1>
        </div>
        <div className="w-2/3 ml-6">
          <div className="flex justify-between items-center mb-4">
            <div className="mt-4 flex items-center ">
              <button
                className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => {
                  window.location.href = `/creator/edit/${creator.id}`;
                }}
              >
                <FaEdit className="inline mr-2" />
                Edit Creator
              </button>
            </div>
            <div className="mt-4 flex items-center ">
              <button
                className="btn bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                <FaEdit className="inline mr-2" />
                Delete Creator
              </button>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p>{creator.description}</p>
          <div className="flex flex-col mt-4">
            {/* Social Media Links */}
            <h2 className="text-xl font-bold mb-2">Social Media Links</h2>
            {creator.url ? (
              <div className="flex items-center">
                <FaYoutube className="inline mr-2" />
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @{creator.name}
                </a>
              </div>
            ) : (
              <p className="text-gray-400">No link available.</p>
            )}
            {creator.url ? (
              <div className="flex items-center">
                <FaTwitch className="inline mr-2" />
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @{creator.name}
                </a>
              </div>
            ) : (
              <p className="text-gray-400">No link available.</p>
            )}
            {creator.url ? (
              <div className="flex items-center">
                <FaTwitter className="inline mr-2" />
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @{creator.name}
                </a>
              </div>
            ) : (
              <p className="text-gray-400">No link available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button
          className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => window.history.back()}
        >
          Back to Creators
        </button>
      </div>
    </div>
  );
}

export default ViewCreator;
