import React from 'react';
import { render } from '@testing-library/react-native';
import Base from './Base';

describe('Base', () => {
  it('renders the username correctly', () => {
    const { getByText } = render(
      <Base userName="John Doe" isTutor={true}>
        <></>
      </Base>,
    );
    const usernameText = getByText('John Doe');
    expect(usernameText).toBeDefined();
  });

  it('renders the student/tutor status correctly', () => {
    const { getByText } = render(
      <Base userName="John Doe" isTutor={false}>
        <></>
      </Base>,
    );
    const studentText = getByText('Student');
    expect(studentText).toBeDefined();
  });
});
