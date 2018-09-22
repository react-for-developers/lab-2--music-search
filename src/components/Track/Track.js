import React, { Component } from "react";

export default class Track extends Component {
  convertSeconds(seconds) {
    return Math.floor(seconds / 60) + "m" + Math.floor(seconds % 60) + "s";
  }

  saveTrackHandler() {
    console.log(this.track);
    fetch("https://react-api-lab.herokuapp.com/playlists/@sparragus", {
      method: "POST",
      body: JSON.stringify({ track: this.props.track }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  render() {
    const { trackNumber, name, durationInSeconds } = this.props.track;

    return (
      <div className="row mb-4">
        <div className="col-1">
          <h4>{trackNumber}</h4>
        </div>

        <div className="col-9">
          <h3>{name}</h3>
          <p>
            <em>{this.convertSeconds(durationInSeconds)}</em>
          </p>
        </div>

        <div className="col-2">
          <button onClick={() => this.saveTrackHandler()}>
            Save to playlist
          </button>
        </div>
      </div>
    );
  }
}
