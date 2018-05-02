import React, { Component } from "react";

class App extends Component {
  render(){
    return (
      <div className="playlist">
        <h1>The Playlist</h1>
        <div className="playlist-table-div">

        <table id="playlist-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>

        </div>
      </div>
    );
  }
}

export default App;
