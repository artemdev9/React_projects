import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./styles/App.module.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" },
  ]);

  return (
    <div className="App">
      <header className={styles.logo}>Jamz</header>
      <div className="App_search">
        <SearchBar></SearchBar>
        <div className={styles.App_tracks}>
          <SearchResults data={data} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
