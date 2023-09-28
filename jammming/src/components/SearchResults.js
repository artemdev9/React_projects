import React from "react";
import TrackList from "./TrackList";

function SearchResults(props) {
  console.log(props.data);
  return (
    <div>
      <h2>Results</h2>
      <TrackList data={props.data} />
    </div>
  );
}

export default SearchResults;
