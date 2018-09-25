import React, { Component } from "react";
import Layout from "../Layout";
import { Switch, Route } from "react-router-dom";
import ArtistDetail from "../ArtistDetail";
import SearchBar from "../SearchBar";
import Playlist from "../Playlist";
import AlbumDetail from "../AlbumDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/artists/:artistId" component={ArtistDetail} />
            <Route exact path="/albums/:albumId" component={AlbumDetail} />
            <Route exact path="/playlists/:playlist_id" component={Playlist} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
