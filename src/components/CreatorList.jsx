import React from "react";
import CreatorCard from "./CreatorCard";

function CreatorList({ creators, onUpdateCreator, onDeleteCreator }) {
  return (
    <div className="creator-list container mx-auto p-4 flex flex-wrap gap-4 justify-center">
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          creator={creator}
          onUpdate={onUpdateCreator}
          onDelete={onDeleteCreator}
        />
      ))}
    </div>
  );
}

export default CreatorList;
