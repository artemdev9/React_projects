import React from "react";
import TrackList from "./TrackList";

function SearchResults(props) {
  return (
    <div>
      <h2>Results</h2>
      <TrackList tracks={props.searchData} addTrack={props.addTrack} isRemoval={false}/>
    </div>
  );
}

export default SearchResults;
