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

  it("should rendering BootstraTable correctly", () => {
    const table = app.find(BootstrapTable);
    expect(table.length).toBe(1);
  });
  it("returns the number of `TableHeaderColumn`", () => {
    expect(app.find(".playlist-table").children().length).toEqual(4);
  });

  it("checks the existence of `Title` column", () => {
    expect(app.find(".title-field").props().dataField).toEqual("title");
  });

  it("checks the existence of the filter in the `Year` column", () => {
    expect(app.find(".year-filter").props().filter.type).toEqual("TextFilter");
  });
});



// describe("when typing the year into the filter", () => {
//
//     beforeEach(() => {
//       (app.find(".year-filter").props().filter.type).simulate("change", 2015);
//     });
//
//     it("change the size of `state`", () => {
//         expect(app.state()).toEqual({ size: 2});
//       });
//   });
