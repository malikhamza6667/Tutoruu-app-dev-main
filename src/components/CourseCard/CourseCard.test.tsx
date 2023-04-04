import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CourseCard from "./CourseCard";
import Colors from "../../../assets/Colors";
import { widthPercentageToDP  as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import '@testing-library/jest-native/extend-expect';

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

  // it("renders the correct number of stars for the rating prop", () => {
  //   const { getByTestId } = render(<CourseCard {...mockProps} />);
  //   const ratingStars = getByTestId("rating-stars");
  //   expect(ratingStars.children.length).toBe(mockProps.rating);
  // });

  it("displays the correct number of reviews for the reviews_count prop", () => {
    const { getByTestId } = render(<CourseCard {...mockProps} />);
    expect(getByTestId("reviews-count").props.children).toBe(mockProps.reviews_count);
  });

  it("displays the correct number of sessions for the num_sessions prop", () => {
    const { getByTestId } = render(<CourseCard {...mockProps} />);
    expect(getByTestId("num-sessions").props.children).toBe(mockProps.num_sessions);
  });

  it("displays 'In Person' when the in_person prop is true, and 'Online' when the prop is false", () => {
    const { getByText, rerender } = render(<CourseCard {...mockProps} />);
    expect(getByText("In Person")).toBeDefined();

    mockProps.in_person = false;
    rerender(<CourseCard {...mockProps} />);
    expect(getByText("Online")).toBeDefined();
  });

  it("renders correctly when desc prop is missing", () => {
    const { getByText } = render(<CourseCard {...mockProps} desc={undefined} />);
    expect(getByText("Math")).toBeDefined();
  });

  it("renders with correct styling", () => {
    const { getByTestId } = render(<CourseCard {...mockProps} />);
    expect(getByTestId("button")).toHaveStyle([{ backgroundColor: Colors.orange }]);
    //expect(getByTestId("rating-stars").children[0]).toHaveStyle({ color: Colors.orange });
    

    expect(getByTestId("reviews-count")).toHaveStyle({ color: Colors.orange });
expect(getByTestId("num-sessions")).toHaveStyle({ color: Colors.orange });

  });

  // it("calls onPress prop when button is pressed, even when not passed as prop", () => {
  //   const { getByTestId } = render(<CourseCard {...mockProps} onPress={undefined} />);
  //   fireEvent.press(getByTestId("button"));
  //   expect(mockProps.onPress).toHaveBeenCalled();
  // });
});
