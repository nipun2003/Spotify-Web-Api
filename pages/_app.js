import Head from "next/head";
import DataLayer from "../components/DataLayer";
import Main from "../components/Main";
import reducer, { initialState } from "../components/reducer";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main Component={Component} pageProps = {pageProps} />
    </DataLayer>
  );
}

export default MyApp;
