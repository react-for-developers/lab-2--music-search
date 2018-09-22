import React, { Component } from "react";
import Track from "../Track";

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);
    this.albumId = this.props.match.params.albumId;
    this.fetchAlbum();
    this.state = {
      album: ""
    };
  }

  fetchAlbum() {
    fetch(`https://react-api-lab.herokuapp.com/albums/${this.albumId}`)
      .then(r => r.json())
      .then(res => {
        const album = res.data;
        this.setState({ album });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { tracks } = this.state.album;
    return (
      <div className="row">
        <div className="col-12">
          <div className="row mb-5">
            <div className="col-3">
              <img
                className="img-fluid"
                src="https://lastfm-img2.akamaized.net/i/u/300x300/394cfbc6b2a74766a4364778c641ca51.png"
                alt="Album Cover"
              />
            </div>
            <div className="col-9">
              <h2>Wish You Were Here</h2>
            </div>
          </div>
          <h2>TRACKS:</h2>
          <ol className="list-unstyled">
            {tracks &&
              tracks.map(track => {
                return (
                  <li key={track.trackNumber}>
                    <Track track={track} />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}
