import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Failed from "./Failed";

describe("Failed component", () => {
  const props = {
    amount: "100",
    currency: "USD",
    method: "Credit Card",
  };

  it("renders the component correctly", () => {
    const { getByText } = render(<Failed {...props} />);
    const paymentFailed = getByText("Payment Failed");
    const tryAgainText = getByText("Try again to lock in your session");
    const retryButton = getByText("Retry");
    expect(paymentFailed).toBeTruthy();
    expect(tryAgainText).toBeTruthy();
    expect(retryButton).toBeTruthy();
  });

});
