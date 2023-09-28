import React from "react";

function TrackList(props) {
  console.log(props.data);
  return (
    <div>
      <ul>
        {props.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;
