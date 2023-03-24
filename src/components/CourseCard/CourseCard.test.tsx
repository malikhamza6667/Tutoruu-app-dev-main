import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CourseCard from "./CourseCard";

describe("CourseCard component", () => {
  const mockProps = {
    name: "Math",
    desc: "M-123",
    rating: 5,
    reviews_count: 2,
    num_sessions: 4,
    in_person: true,
    onPress: jest.fn(),
  };

  it("renders correctly with given props", () => {
    const { getByText } = render(<CourseCard {...mockProps} />);
    expect(getByText("In Person")).toBeDefined();
    expect(getByText("Math")).toBeDefined();
    expect(getByText("M-123")).toBeDefined();
    expect(getByText("Take Class")).toBeDefined();
  });

  it("calls onPress prop when button is pressed", () => {
    const { getByTestId } = render(<CourseCard {...mockProps} />);
    fireEvent.press(getByTestId("button"));
    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
