import React from 'react';
import {render} from '@testing-library/react-native';
import ChatMessage from './ChatMessage';

describe('ChatMessage', () => {
  const messageProps = {
    mine: true,
    date: '2022-03-23',
    sender_image: 'https://i.pravatar.cc/300',
    text: 'Hello world!',
  };

  it('renders correctly when the message is mine', () => {
    const {getByText, getByTestId} = render(<ChatMessage {...messageProps} />);
    const messageText = getByText(messageProps.text);
    const avatar = getByTestId('avatar');

    expect(messageText).toBeDefined();
    expect(avatar).toBeDefined();
  });

  it('renders correctly when the message is not mine', () => {
    const notMineProps = {...messageProps, mine: false};
    const {getByText, getByTestId} = render(<ChatMessage {...notMineProps} />);
    const messageText = getByText(notMineProps.text);
    const avatar = getByTestId('avatar');

    expect(messageText).toBeDefined();
    expect(avatar).toBeDefined();
  });


  // it("renders the date prop correctly", () => {
  //   const { getByText } = render(<ChatMessage {...messageProps} />);
  //   const dateText = getByText("2022-03-23");
  //   expect(dateText).toBeTruthy();
  // });

  it("renders the sender_image prop correctly", () => {
    const { getByTestId } = render(<ChatMessage {...messageProps} />);
    const avatar = getByTestId('avatar');
    // expect(avatar.props.image).toEqual(messageProps.sender_image);
    expect(avatar.props.source.uri).toEqual(messageProps.sender_image);
  });
  it("applies the correct styles based on the mine prop", () => {
    const { getByTestId } = render(<ChatMessage {...messageProps} />);
    const messageContainer = getByTestId("message-container");
    expect(messageContainer.props.style[1]).toHaveProperty(
      "backgroundColor",
      "#FFFFFF"
    );
});

it("renders the text prop correctly", () => {
  const { getByText } = render(<ChatMessage {...messageProps} />);
  const messageText = getByText("Hello world!");
  expect(messageText).toBeTruthy();
});


it("renders correctly when text prop is an empty string", () => {
  const emptyTextProps = { ...messageProps, text: "" };
  const { getByTestId } = render(<ChatMessage {...emptyTextProps} />);
  const messageContainer = getByTestId("message-container");
  expect(messageContainer.children.length).toEqual(1);
});

it("renders correctly when text prop is a string with only spaces", () => {
  const spaceTextProps = { ...messageProps, text: "   " };
  const { getByTestId } = render(<ChatMessage {...spaceTextProps} />);
  const messageContainer = getByTestId("message-container");
  expect(messageContainer.children.length).toEqual(1);
});
});
