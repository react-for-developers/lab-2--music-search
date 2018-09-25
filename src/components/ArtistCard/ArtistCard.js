import React, { Component } from "react";

export default class ArtistCard extends Component {
  render() {
    const { name, imageUrl, bio } = this.props.artistData;
    return (
      <div className="row mb-4">
        <div className="col-4">
          <img
            className="img-fluid"
            src={imageUrl}
            alt={`Artist name: ${name}`}
          />
        </div>
        <div className="col-8">
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
      </div>
    );
  }
}
