import React from "react";
import { View } from "react-native";
import { render } from "@testing-library/react-native";
import '@testing-library/jest-native';
import Spacer from "./Spacer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

describe("Spacer", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Spacer />);
    const spacer = getByTestId("spacer");
    expect(spacer).toBeDefined();
  });

  it('should render a view with a margin vertical of 0.5%', () => {
    const { getByTestId } = render(<Spacer />);
    const spacer = getByTestId('spacer');

    expect(spacer.props.style).toContainEqual({ marginVertical: hp('0.5') });
  });


  it('should apply a custom style to the view', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(<Spacer style={customStyle} />);
    const spacer = getByTestId('spacer');

    expect(spacer.props.style).toContainEqual(customStyle);
  });

});
