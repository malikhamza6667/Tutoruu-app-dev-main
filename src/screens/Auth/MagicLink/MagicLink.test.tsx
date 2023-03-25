import React from 'react';
import { render } from '@testing-library/react-native';
import MagicLink from './MagicLink';

describe('MagicLink', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MagicLink />);
    expect(getByTestId('magic-link-screen')).toBeDefined();
  });
  it('contains a text message for the user', () => {
    const { getByText } = render(<MagicLink />);
    expect(getByText('Check Your Inbox!')).toBeDefined();
  });

  it('contains a message instructing the user to click on the magic link', () => {
    const { getByText } = render(<MagicLink />);
    expect(getByText('Click on the magic link you just received to verify it’s really you.')).toBeDefined();
  });
});
