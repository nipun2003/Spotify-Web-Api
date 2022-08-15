import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../components/DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import SongRow from '../../components/SongRow';

const Playlist = () => {

    const router = useRouter();
    const {pId} = router.query;
    const [{token},dispatch] = useDataLayerValue();
    const spotify = new SpotifyWebApi(token);

    const [playlist,setPlaylist] = useState(null);

    useEffect(()=>{
      spotify.getPlaylist(pId).then((res)=>{
        setPlaylist(res);
      })
      spotify.getMyCurrentPlayingTrack().then((res) => {
        if(res === ''){
          spotify.getMyRecentlyPlayedTracks().then((res)=>{
            dispatch({
              type: "SET_CURRENT_SONG",
              currentPlayingSong: res.items[0].track,
            });
          })
        }else{
        dispatch({
          type: "SET_CURRENT_SONG",
          currentPlayingSong: res,
        });
      }
      });
    },[pId])
  return (
    <>
      <div className="body_info flex items-end p-3">
        <img className='h-[20vh] mx-4 shadow-lg' src={playlist?.images[0].url} alt="" />
        <div className="body_infoText flex-1">
          <strong>PLAYLIST</strong>
          <h2 className='text-4xl mb-3'>{playlist?.name}</h2>
          <p className='text-[14px]'>{playlist?.description}</p>
        </div>
      </div>
      <div className="body_songs my-4">
        <div className="body_icons flex items-center">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {playlist?.tracks.items.map((item,key) => (
          <SongRow key={key} track={item?.track} />
        ))}
      </div>
      <div className="mt-20"></div>
    </>
  )
}

export default Playlist
