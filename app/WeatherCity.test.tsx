import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherCity from "./WeatherCity";

describe("it renders a WeatherCity component", () => {
  it("is a form", () => {
    render(<WeatherCity location={} current={{}} />);

    const headings = screen.findAllByRole("heading");

    expect(headings).toBeDefined;
  });
});
