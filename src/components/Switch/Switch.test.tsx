import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Switch } from "./Switch";

describe("Switch", () => {
    it("calls onPress prop when clicked", () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<Switch opened={false} onPress={onPressMock} />);
        const switchButton = getByTestId("switch-button");
        fireEvent.press(switchButton);
        expect(onPressMock).toHaveBeenCalled();
    });
});
