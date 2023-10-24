import React, { useState } from "react";
import styles from "../styles/Track.module.css";

function Track(props) {
  const addTrack = () => {
    props.addTrack(props.track);
  };

  const removeTrack = () => {
    props.removeTrack(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return <button onClick={removeTrack}>-</button>;
    }
    return <button onClick={addTrack}>+</button>;
  };

  return (
    <div className={styles.track_control_container}>
      <div className={styles.track_container}>
        <h3>{props.track.name}</h3>
        <h4>{props.track.artist}</h4>
        <h4>{props.track.album}</h4>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
