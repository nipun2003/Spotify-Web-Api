import React from "react";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import Link from "next/link";
import { getPlayListId } from "./util";

const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="h-[100vh] flex-[0.13] bg-[#040404] text-white min-w-[230px] px-[10px]">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
        className="mr-auto h-[70px] p-[10px]"
      />
      <SidebarOptions Icon={HomeIcon} title={"Home"} />
      <SidebarOptions Icon={SearchIcon} title={"Search"} />
      <SidebarOptions Icon={LibraryMusicIcon} title={"Your Library"} />
      <br />
      <strong className="ml-[10px] text-[12px] p-[5x]">PLAYLISTS</strong>
      <hr className="border-[1px] border-[#282828] w-[90%] my-[10px] mx-auto" />
      {playlists?.items?.map((playlist, key) => (
          <SidebarOptions
            key={key}
            spotify={spotify}
            playlist={playlist}
            title={playlist.name}
          />
      ))}
    </div>
  );
};

export default Sidebar;
