import React from "react";
import { shallow } from "enzyme";
import setupTests from "./../setupTests.js";
import tempPolyfills from "./../tempPolyfills";
import TestRenderer from "react-test-renderer";
import App from "./App";

const app = shallow(<App />);

const rockSong80 = {
  title: "Devo",
  artist: "Whip It",
  album: "Freedom of Choice",
  year: 1980
};


const rockSong90 = {
  title: "What's up",
  artist: "4 Non Blondes",
  album: "Bigger, Better, Faster, More!",
  year: 1992
};

const mockPlaylist = [
  rockSong80,
  rockSong90
];


it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the size in `state`", () => {
    expect(app.state()).toEqual({ size: 6});
  });

describe("table", () =>{

  it("should rendering BootstraTable correctly", () => {
    const table = app.find(BootstrapTable);
    expect(table.length).toBe(1);
  });
  it("should return the number of `TableHeaderColumn`", () => {
    expect(app.find(".playlist-table").children().length).toEqual(4);
  });

  it("should check the existence of `Title` column", () => {
    expect(app.find(".title-field").props().dataField).toEqual("title");
  });

  it("should check the existence of the filter in the `Year` column", () => {
    expect(app.find(".year-filter").props().filter.type).toEqual("TextFilter");
  });

});

describe("Filter", () =>{

  jest.useFakeTimers();

  // const renderedApp = mount(<App playlist={ mockPlaylist } />);
  const renderedApp = shallow(<App playlist={ mockPlaylist } />);

  it("should display all the songs in the playlist initially", () => {
      expect(renderedApp.find('td').contains(rockSong80.title)).toBe(true);
      expect(renderedApp.find('td').contains(rockSong90.title)).toBe(true);
  });

  beforeEach(() => {
    app.find(".btn-remove").simulate("click");
  });

//   test('plays video', () => {
//   const spy = jest.spyOn(video, 'play');
//   const isPlaying = video.play();
//
//   expect(spy).toHaveBeenCalled();
//   expect(isPlaying).toBe(true);
//
//   spy.mockReset();
//   spy.mockRestore();
// });
});
