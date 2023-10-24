import TrackList from "./TrackList";

function Playlist(props) {

  const playlistNameChange = (event) => {
    props.playlistNameChange(event.target.value);
  }

  return (
    <div>
      <input onChange={playlistNameChange} defaultValue={props.playlistName} />
      <button>Add Playlist</button>
      <TrackList
        tracks={props.playlist}
        removeTrack={props.removeTrack}
        isRemoval={true}
      />
    </div>
  );
}

export default Playlist;
