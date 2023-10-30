import React, { useState } from "react";

import "./App.css";
import styles from "./styles/App.module.css";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./utilities/Spotify";
import Logo from "./components/Logo";

function App() {
  Spotify.getAccessToken();

  const [searchData, setSearchData] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchData);
  };

  const savePlaylist = () => {
    if (playlistTracks.length) {
      const trackURIs = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
        console.log("Playlist saved");
      });
    }
  };

  const addTrack = (track) => {
    let trackAlreadyAdded = false;
    playlistTracks.forEach((item) => {
      if (track.id === item.id) {
        console.log("track was already added");
        trackAlreadyAdded = true;
        return; // track has already been added
      }
    });
    if (!trackAlreadyAdded) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const playlistNameChange = (name) => {
    console.log(name);
    setPlaylistName(name);
  };

  return (
    <div className="App">
      <div className={styles.blackground_halfcircle_top}></div>
      <div className={styles.logo_container}>
        <header className={styles.logo}>Jamz</header>
        <Logo />
      </div>
      <div className="App_search">
        <SearchBar onSearch={search}></SearchBar>
        <div className={styles.App_tracks}>
          <SearchResults searchData={searchData} addTrack={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlist={playlistTracks}
            removeTrack={removeTrack}
            playlistNameChange={playlistNameChange}
            playlistSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
