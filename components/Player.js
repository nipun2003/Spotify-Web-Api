import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Player = ({ Component, pageProps, spotify }) => {
  return (
    <div className="player">
      <div className="flex">
        {/**SideBar */}
        <Sidebar spotify={spotify} />
        {/**Body */}
        <div className="content flex-[0.87] h-[100vh] bg-gradient-to-b from-[#5b5773] to to-black py-4 px-8 overflow-y-auto">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>

      {/**Footer */}
      <Footer />
    </div>
  );
};

export default Player;
