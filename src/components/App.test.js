import React from "react";
import { shallow } from "enzyme";
import setupTests from "./../setupTests.js";
import tempPolyfills from "./../tempPolyfills";
import App from "./App";

const app = shallow(<App />);

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
