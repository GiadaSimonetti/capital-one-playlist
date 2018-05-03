import React from "react";
import { shallow } from "enzyme";
import setupTests from './../setupTests.js';
import tempPolyfills from './../tempPolyfills';
import App from "./App";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the size in `state`", () => {
    expect(app.state()).toEqual({ size: 6});
  });

describe("table", () =>{
  it('returns the number of `TableHeaderColumn`', function() {
    expect(app.find(".playlist-table").children().length).toEqual(4)
  });
})
