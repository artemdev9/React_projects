import React, { useState } from "react";
import styles from "../styles/Track.module.css";

function Track(props) {
  return (
    <div className={styles.track_control_container}>
      <div className={styles.track_container}>
        <h3>{props.track.name}</h3>
        <h4>{props.track.artist}</h4>
      </div>
      <button>+</button>
    </div>
  );
}

export default Track;
