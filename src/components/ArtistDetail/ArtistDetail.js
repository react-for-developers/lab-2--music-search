import React, { Component } from "react";
import ArtistCard from "../ArtistCard";
import AlbumCard from "../AlbumCard";

export default class ArtistDetail extends Component {
  constructor(props) {
    super(props);
    this.artistId = this.props.match.params.artistId;
    this.getArtistData();
    this.state = {
      artistData: {}
    };
  }

  getArtistData() {
    fetch(`https://react-api-lab.herokuapp.com/artists/${this.artistId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          artistData: res.data
        });
      })
      .catch(e => console.log(e));
  }
  getAlbumData() {
    fetch()
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }

  render() {
    const artist = this.state.artistData;
    const { albums } = this.state.artistData;
    return (
      <div>
        <ArtistCard artistData={artist} />
        <div>
          {albums &&
            albums.map(album => {
              return <AlbumCard key={album.id} album={album} />;
            })}
        </div>
      </div>
    );
  }
}
