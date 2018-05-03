import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const playlist = [
  {
    title: "One More Time",
    artist: "Alison Moyet",
    album: "The Turn",
    year: 2007
  },
  {
    title: "Taurus II",
    artist: "Mike Oldfield",
    album: "5 Miles Out",
    year: 2013
  },
  {
    title: "F4",
    artist: "Spooky Tooth",
    album: "The Island Years",
    year: 2015
  },
  {
    title: "The Children Of Rarn",
    artist: "T-Rex",
    album: "T-Rex",
    year: 2014
  },
  {
    title: "Another Day",
    artist: "Alison Moyet",
    album: "The Turn",
    year: 2007
  },
  {
    title: "Face-off",
    artist: "Spooky Tooth",
    album: "The Island Years",
    year: 2015
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {size: 6};
  }

  render(){
    return (
      <div className="playlist">
        <h1>The Playlist</h1>
        <div className="playlist-table-div">

        <BootstrapTable className="playlist-table" hover={true} data={ playlist }>
          <TableHeaderColumn dataField='title' isKey={ true }>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='artist'>Artist</TableHeaderColumn>
          <TableHeaderColumn dataField='album'>Album</TableHeaderColumn>
          <TableHeaderColumn dataField='year' filter={ { type: 'TextFilter', delay: 0 } } className="year-filter">Year</TableHeaderColumn>
      </BootstrapTable>

        </div>
      </div>
    );
  }
}

export default App;
