import React from "react";

const SongRow = ({ track }) => {
  const playSong = () => {
  };

  return (
    <div
      onClick={playSong}
      className="songRow p-4 flex items-center text-white hover:cursor-pointer hover:bg-black/70"
    >
      <img
        className="songRow_album h-[40px] w-[40px]"
        src={track.album.images[0].url}
        alt={track.album.name}
      />
      <div className="songRow_info ml-4">
        <h1 className="text-[16px]">{track?.name}</h1>
        <p className="text-[14px] mt-1 text-gray-500">
          {track.artists.map((artist) => artist.name).join(", ")} -
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
