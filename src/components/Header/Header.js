import React, { Component } from "react";

import "./Header.css";
import Logo from "../Logo";
import { PLAYLIST_ID } from "../../constants";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <a className="mr-2" href="/">
            <Logo />
          </a>
          <Link to={`/playlists/${PLAYLIST_ID}`}>My Playlist</Link>
        </div>
      </div>
    );
  }
}
