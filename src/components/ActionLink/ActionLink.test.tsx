import React from "react";
import { render } from "@testing-library/react-native";
import ActionLink from "./ActionLink";
import {
    FontAwesome5,
    Entypo,
} from '@expo/vector-icons';
describe("ActionLink component", () => {
it("renders text and icon correctly", () => {
    const { getByText, getByTestId } = render(
      <ActionLink text="Test ActionLink" icon="FontAwesome5 check" />
    );
    const text = getByText("Test ActionLink");
    const touchableOpacity = getByTestId("touchable-opacity");
    const icon = touchableOpacity.findAllByType(FontAwesome5)[0];
    const chevron = touchableOpacity.findAllByType(Entypo)[0];
    expect(text).toBeDefined();
    expect(icon.props.name).toBe("check");
    expect(chevron.props.name).toBe("chevron-right");
  });
});
