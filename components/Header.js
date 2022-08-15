import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

const Header = () => {

  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header flex justify-between mb-[30px]">
      <div className="header_left flex-[0.5] min-w-[75px] bg-white text-gray-500 rounded-3xl flex items-center p-4">
        <SearchIcon />
        <input className="border-none w-[100%]" type="text" placeholder="Search for Artist, Songs or Albums" />
      </div>
      <div className="header_right flex items-center">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4 className="ml-3">{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
