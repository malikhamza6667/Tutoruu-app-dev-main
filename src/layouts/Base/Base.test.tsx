import React from "react";
import { render } from "@testing-library/react-native";
import Base from "./Base";

describe("Base component", () => {
  it("should render the component correctly with no children", () => {
    const { getByTestId } = render(<Base userName="" isTutor={false} />);

    const container = getByTestId("base-container");

    expect(container).toBeDefined();
  });

  it("should render the component correctly without the isTutor prop", () => {
    const { getByTestId } = render(<Base userName="" />);

    const container = getByTestId("base-container");

    expect(container).toBeDefined();
  });

  it("should render the component correctly when the isTutor prop is null, undefined, or a non-boolean value", () => {
    const { getByTestId } = render(<Base userName="" isTutor={null} ><></></Base>);
    const { getByTestId: getByTestIdUndefined } = render(<Base userName="" isTutor={undefined} ><></></Base>);
    const { getByTestId: getByTestIdNonBoolean } = render(<Base userName="" isTutor="some string" ><></></Base>);

    const container = getByTestId("base-container");
    const containerUndefined = getByTestIdUndefined("base-container");
    const containerNonBoolean = getByTestIdNonBoolean("base-container");

    expect(container).toBeDefined();
    expect(containerUndefined).toBeDefined();
    expect(containerNonBoolean).toBeDefined();
  });

  const userName = "John";
  const isTutor = false;

  it("should render the component correctly with student role", () => {
    const { getByTestId, getByText } = render(
      <Base userName={userName} isTutor={isTutor}>
        <></>
      </Base>
    );

    const container = getByTestId("base-container");
    const studentText = getByTestId("student-text");

    expect(container).toBeDefined();
    expect(studentText).toBeDefined();
    expect(getByText(`${userName}`)).toBeDefined();
    expect(getByText("Student")).toBeDefined();
  });

  it("should render the component correctly with tutor role", () => {
    const { getByTestId, getByText } = render(
      <Base userName={userName} isTutor={true}>
        <></>
      </Base>
    );

    const container = getByTestId("base-container");
    const studentText = getByTestId("student-text");

    expect(container).toBeDefined();
    expect(studentText).toBeDefined();
    expect(getByText(`${userName}`)).toBeDefined();
    expect(getByText("Tutor")).toBeDefined();
  });
});
