import React from "react";
import { render } from "@testing-library/react-native";
import Heading from "./Heading";

describe("Heading component", () => {
  it("should render the heading text", () => {
    const { getByText } = render(<Heading heading="My Heading" />);
    const headingText = getByText("My Heading");
    expect(headingText).toBeDefined();
  });
});
