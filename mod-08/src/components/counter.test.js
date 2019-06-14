import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Counter from "./counter";

afterEach(cleanup);

test("Render the component", () => {
  const wrapper = render(<Counter />);

  expect(wrapper.getByText("Count: 0")).toBeDefined();
});

test("Render the component", () => {
  const wrapper = render(<Counter />);

  fireEvent.click(wrapper.getByText("Increment"));

  expect(wrapper.getByText("Count: 1")).toBeDefined();
});
