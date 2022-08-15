import Link from "next/link";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import { getPlayListId } from "./util";
const SidebarOptions = ({ title, spotify, Icon, playlist }) => {
  const [{}, dispatch] = useDataLayerValue();
  return (
    <Link href={playlist ? `/playlist/${getPlayListId(playlist)}` : "/"}>
      <div className="text-gray-500 h-[40px] cursor-pointer transition-colors duration-200 ease-in flex items-center space-x-2 hover:text-white">
        {Icon && <Icon className="" />}
        {Icon ? (
          <h4>{title}</h4>
        ) : (
          <p className="mt-[10px] mr-[10px] text-[14px]">{title}</p>
        )}
      </div>
    </Link>
  );
};

export default SidebarOptions;
