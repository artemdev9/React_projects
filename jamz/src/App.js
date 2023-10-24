import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./styles/App.module.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const [searchData, setSearchData] = useState([
    {
      id: 1,
      name: "track name 1 ",
      artist: "artist name 1",
      album: "album name 1",
    },
    {
      id: 2,
      name: "track name 2 ",
      artist: "artist name 2",
      album: "album name 2",
    },
    {
      id: 3,
      name: "track name 3 ",
      artist: "artist name 3",
      album: "album name 3",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   id: 1,
    //   name: "track name playlist 1 ",
    //   artist: "artist name playlist 1",
    //   album: "album name playlist 1",
    // },
    // {
    //   id: 2,
    //   name: "track name playlist 1 ",
    //   artist: "artist name playlist 1",
    //   album: "album name playlist 1",
    // },
    // {
    //   id: 3,
    //   name: "track name playlist 1 ",
    //   artist: "artist name playlist 1",
    //   album: "album name playlist 1",
    // },
  ]);

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
      <header className={styles.logo}>Jamz</header>
      <div className="App_search">
        <SearchBar></SearchBar>
        <div className={styles.App_tracks}>
          <SearchResults searchData={searchData} addTrack={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlist={playlistTracks}
            removeTrack={removeTrack}
            playlistNameChange={playlistNameChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
