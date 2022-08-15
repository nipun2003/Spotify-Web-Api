import React from "react";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

const Footer = () => {

  const [{currentPlayingSong},dispatch] = useDataLayerValue();

  const item = currentPlayingSong?.item??currentPlayingSong

  return (
    <div className="footer max-h-20 fixed flex justify-between bottom-0 w-full bg-[#282828] p-[20px]">
      <div className="footer_left flex-[0.3] flex items-center text-white w-[300px]">
        <img
          className="footer_albumLogo h-[60px] w-[60px] mr-[20px] object-contain"
          src={item?.album?.images[0]?.url}
          alt="img"
        />
        <div className="footer_songInfo">
          <h4 className="mb-[5px] text-ellipsis line-clamp-1">{item?.name}</h4>
          <p className="text-[12px] text-ellipsis line-clamp-1">
          {item?.artists.map((artist) => artist.name).join(", ")} -
          {item?.album.name}
          </p>
        </div>
      </div>
      <div className="footer_center flex-[0.4] px-[100px] text-white flex items-center justify-between">
        <ShuffleIcon className="footer_green text-green-600 scale-[1.1]" />
        <SkipPreviousIcon className="footer_icon scale-[1.1]" />
        <PlayCircleOutlinedIcon className="footer_play scale-[1.6]" />
        <SkipNextIcon className="footer_icon scale-[1.1]" />
        <RepeatIcon className="footer_green text-green-600 scale-[1.1]" />
      </div>
      <div className="footer_right flex-[0.3] flex items-center justify-between text-white">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
