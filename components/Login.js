import React from "react";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="grid place-items-center h-[100vh] bg-black">
      {/** Spotify logo */}
      <img
        className="w-full"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
      />
      {/** Spotify logo button
       */}
      <a
        className="p-[20px] bg-[#1db954] rounded-lg text-white no-underline"
        href={loginUrl}
      >
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
