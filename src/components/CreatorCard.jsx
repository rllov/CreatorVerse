import React from "react";
import { useNavigate } from "react-router-dom";

function CreatorCard({ creator }) {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/creator/${creator.id}`); // Navigate to the ViewCreator page with the creator's ID
  };

  return (
    <div className="card flex flex-col items-center justify-center p-4 m-4 bg-gray-800 text-white rounded-lg shadow-lg w-fit">
      <div
        className="shadow-lg p-4 mb-4 rounded-lg w-full max-w-md text-center bg-cover bg-center h-[300px]"
        style={{
          backgroundImage: `url(${
            creator.imageURL || "https://via.placeholder.com/300"
          })`,
        }}
        aria-label={`Image of ${creator.name}`}
      />
      <div className="text-white text-center">
        <h2 className="text-xl font-bold mb-2">
          {creator.name || "Unknown Creator"}
        </h2>
        <p className="text-sm mb-4">
          {creator.description || "No description available."}
        </p>
        {creator.url ? (
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit Channel
          </a>
        ) : (
          <p className="text-gray-400">No link available.</p>
        )}
      </div>
      <div>
        <button
          className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleMoreInfoClick}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default CreatorCard;
