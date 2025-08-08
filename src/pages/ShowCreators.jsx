import React from "react";
import CreatorCard from "../components/CreatorCard";

function ShowCreators({ creators }) {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1>All Content Creators</h1>
      {creators.length > 0 ? (
        <div className="creator-list flex flex-wrap justify-center">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      ) : (
        <p>No content creators found. Add some to get started!</p>
      )}
    </div>
  );
}

export default ShowCreators;
