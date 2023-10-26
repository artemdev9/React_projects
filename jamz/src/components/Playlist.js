import TrackList from "./TrackList";

import style from "../styles/Playlist.module.css";

function Playlist(props) {
  const playlistNameChange = (event) => {
    props.playlistNameChange(event.target.value);
  };

  return (
    <div className={style.Playlist_container}>
      <div className={style.Playlist_controls}>
        <input onChange={playlistNameChange} value={props.playlistName} />
        <button onClick={props.playlistSave}>Add Playlist</button>
      </div>
      <TrackList
        tracks={props.playlist}
        removeTrack={props.removeTrack}
        isRemoval={true}
      />
    </div>
  );
}

export default Playlist;
