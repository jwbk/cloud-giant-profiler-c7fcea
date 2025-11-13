import React, { useState } from 'react';

const MixingDeck = () => {
  const [tracks, setTracks] = useState([]);
  
  const addTrack = (track) => {
    setTracks([...tracks, track]);
  };
  
  const removeTrack = (index) => {
    const updatedTracks = [...tracks];
    updatedTracks.splice(index, 1);
    setTracks(updatedTracks);
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Mixing Deck</h1>
      
      <div className="grid grid-cols-3 gap-4">
        {tracks.map((track, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md flex items-center justify-between">
            <p>{track}</p>
            <button onClick={() => removeTrack(index)} className="text-red-500">Remove</button>
          </div>
        ))}
      </div>
      
      <input type="text" placeholder="Enter track name" className="border border-gray-300 p-2 rounded-md mt-4" />
      <button onClick={() => addTrack("New Track")} className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Add Track</button>
    </div>
  );
};

export default MixingDeck;
