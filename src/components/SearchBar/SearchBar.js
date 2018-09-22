import React, { Component } from "react";
import "./SearchBar.css";
import Home from "../../pages/Home";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      artists: null
    };
  }

  searchHandler(e) {
    e.preventDefault();
    const searchCriteria = this.inputRef.current.value;
    this.makeQuery(searchCriteria);
  }

  queryStr(spaceString) {
    return spaceString.split(" ").join("+");
  }

  makeQuery(searchCriteria) {
    return fetch(
      `https://react-api-lab.herokuapp.com/search?query=${this.queryStr(
        searchCriteria
      )}`
    )
      .then(r => r.json())
      .then(r => {
        const artists = r.data;
        this.setState({ artists });
        return r.data;
      })
      .catch(e => console.log(e));
  }

  render() {
    const { artists } = this.state;
    return (
      <div>
        <form className="SearchBar mb-4">
          <div className="row">
            <div className="col-10 SeachBar__container">
              <input
                className="SearchBar__input"
                type="text"
                placeholder="Artist name"
                ref={this.inputRef}
              />
            </div>
            <div className="col-2">
              <button
                className="SearchBar__submit-button"
                onClick={e => this.searchHandler(e)}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {artists && <Home artists={artists} />}
      </div>
    );
  }
}
