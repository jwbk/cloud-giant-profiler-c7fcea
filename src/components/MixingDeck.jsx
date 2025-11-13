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

  const loadSongFromFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      addTrack(file.name);
    };
    reader.readAsDataURL(file);
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

      <input type="file" accept=".mp3,.wav" onChange={loadSongFromFile} className="border border-gray-300 p-2 rounded-md mt-4" />
    </div>
  );
};

export default MixingDeck;
