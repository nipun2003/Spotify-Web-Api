import React from "react";
import {  PlayCircleFilled } from "@mui/icons-material";

const Song = ({ track }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2 ">
      <img
        className="rounded-md w-full h-full"
        src={track.album.images[0].url}
        alt={track.name}
      />
      <div className="absolute w-full h-full hover:bg-gradient-to-t hover:from-black/80 hover:to-black/10 top-0 z-10 flex items-end justify-center text-white opacity-0 hover:opacity-100">
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <PlayCircleFilled fontSize="large" className="play_icon" />
        </div>
        <h1 className="text-lg font-bold m-2 ">{track.name}</h1>
      </div>
    </div>
  );
};

export default Song;
