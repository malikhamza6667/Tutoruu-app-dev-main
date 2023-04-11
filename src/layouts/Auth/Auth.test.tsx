import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import Auth from "./Auth";
import '@testing-library/jest-native/extend-expect';

describe("Auth Component", () => {
  it("should render the title and children", () => {
    const { getByText } = render(
      <Auth title="Sign in" subTitle="New to app?" footerTitle="Forgot Password?">
        <></>
      </Auth>
    );
    expect(getByText("Sign in")).toBeTruthy();
    expect(getByText("New to app?")).toBeTruthy();
    expect(getByText("Forgot Password?")).toBeTruthy();
  });

  it("should call onPressSubtitle when pressableSubtitleText is pressed", () => {
    const onPressSubtitleMock = jest.fn();
    const { getByText } = render(
      <Auth title="Sign in" subTitle="New to app?" pressableSubtitleText="Register" onPressSubtitle={onPressSubtitleMock}>
        <></>
      </Auth>
    );

    const registerButton = getByText("Register");
    fireEvent.press(registerButton);

    expect(onPressSubtitleMock).toHaveBeenCalledTimes(1);
  });

  it("should call onPressfooterTitle when footerTitle is pressed", () => {
    const onPressfooterTitleMock = jest.fn();
    const { getByText } = render(
      <Auth title="Sign in" subTitle="New to app?" footerTitle="Forgot Password?" onPressfooterTitle={onPressfooterTitleMock}>
        <></>
      </Auth>
    );

    const forgotPasswordButton = getByText("Forgot Password?");
    fireEvent.press(forgotPasswordButton);

    expect(onPressfooterTitleMock).toHaveBeenCalledTimes(1);
  });

  it('should render the children components passed to it', () => {
    const { getByTestId } = render(
      <Auth title="Title" caption="Caption" subTitle="Sub Title" pressableSubtitleText="Pressable Subtitle Text">
        <Text testID="child-1">Child 1</Text>
        <Text testID="child-2">Child 2</Text>
      </Auth>
    );

    expect(getByTestId('child-1')).toBeTruthy();
    expect(getByTestId('child-2')).toBeTruthy();
  });


  it('should apply the styles passed to it correctly', () => {
    const titleFontSize = 20;
    const titleColor = '#fff';

    const { getByText } = render(
      <Auth title="Title" subTitle="Sub Title" pressableSubtitleText="Pressable Subtitle Text" titleStyle={{ fontSize: titleFontSize, color: titleColor }}>
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Auth>
    );

    const title = getByText('Title');
    expect(title).toHaveStyle({ fontSize: titleFontSize, color: titleColor });
  });


  it('should call the onPressSubtitle function when the subtitle button is pressed', () => {
    const onPressSubtitleMock = jest.fn();

    const { getByText } = render(
      <Auth title="Title" subTitle="Sub Title" pressableSubtitleText="Pressable Subtitle Text" onPressSubtitle={onPressSubtitleMock}>
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Auth>
    );

    const subtitleButton = getByText('Pressable Subtitle Text');
    fireEvent.press(subtitleButton);

    expect(onPressSubtitleMock).toHaveBeenCalled();
  });




});