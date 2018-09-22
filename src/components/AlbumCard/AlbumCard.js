import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AlbumCard extends Component {
  render() {
    const { name, artist, imageUrl, id } = this.props.album;
    return (
      <Link to={`/albums/${id}`}>
        <div className="row mb-4">
          <div className="col-3">
            <img
              className="img-fluid"
              src={imageUrl}
              alt={`Album name: ${name} from ${artist.name}`}
            />
          </div>
          <div className="col-9">
            <h1>{name}</h1>
          </div>
        </div>
      </Link>
    );
  }
}
