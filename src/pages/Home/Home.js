import React, { Component } from "react";
import ArtistCard from "../../components/ArtistCard";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const { artists } = this.props;

    return (
      <div className="col-12">
        {artists.map(artist => {
          return (
            <Link key={artist.id} to={`/artists/${artist.id}`}>
              <div className="mb-4" key={artist.key}>
                <ArtistCard artistData={artist} />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
