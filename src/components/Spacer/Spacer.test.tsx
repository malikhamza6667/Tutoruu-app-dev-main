import React from "react";
import { View } from "react-native";
import { render } from "@testing-library/react-native";
import Spacer from "./Spacer";

describe("Spacer", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Spacer />);
    const spacer = getByTestId("spacer");
    expect(spacer).toBeDefined();
  });
});
