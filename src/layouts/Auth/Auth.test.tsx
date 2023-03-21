import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Auth from "./Auth";

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
});