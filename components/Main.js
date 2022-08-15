import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Main = ({ Component, pageProps }) => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcFU0Gx95naAw").then((response) => {
        dispatch({
          type: "SET_WEEKLY",
          discover_weekly: response,
        });
      });

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
    }
  }, []);

  return (
    <div className="app">
      {token ? (
        <Player Component={Component} pageProps={pageProps} spotify={spotify} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Main;
