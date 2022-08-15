import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../components/DataLayer";
import Song from "../components/Song";
import { getGreeting, getPlayListId } from "../components/util";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

export default function Home() {
  const [{ token, playlists }, dispatch] = useDataLayerValue();
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  useEffect(() => {
    if (!token) return;
    spotify.getMyRecentlyPlayedTracks().then((res) => {
      setRecentlyPlayed(res);
    });
  }, []);
  if (!token) {
    return <div className="">No token provided</div>;
  }
  const spotify = new SpotifyWebApi(token);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-3xl">{getGreeting()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 m-3">
        {playlists?.items?.map((playlist, key) => (
          <Link key={key} href={`/playlist/${getPlayListId(playlist)}`}>
            <div
              key={key}
              className="rounded-md flex justify-start items-center bg-gradient-to-b from-[#5b5773] to-[#5b5773]/50 shadow-sm cursor-pointer"
            >
              <img
                className="w-20 h-20 rounded-l-md"
                src={playlist.images[0].url}
                alt={playlist.name}
              />
              <h3 className="ml-10 text-lg">{playlist.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="font-bold text-3xl my-4">Recently Played</h1>
      <div className="hidebar relative flex items-center group">
        <div
          onClick={slideLeft}
          className="bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        >
          <ArrowCircleLeftOutlinedIcon fontSize="large" />
        </div>
        <div
          id="slider"
          className="w-full h-full hidebar whitespace-nowrap scroll-smooth scrollbar-hide relative group-hover:mx-8"
        >
          {recentlyPlayed?.items?.map((song, key) => (
            <Song track={song.track} key={key} />
          ))}
        </div>
        <div
          onClick={slideRight}
          className="bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        >
          <ArrowCircleRightOutlined fontSize={"large"} />
        </div>
      </div>
    </div>
  );
}
