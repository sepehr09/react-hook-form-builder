import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleApp from "./ExampleApp";

test("renders learn react link", () => {
  render(<ExampleApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
