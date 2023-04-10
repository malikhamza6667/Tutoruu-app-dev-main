import React from 'react';
import { render } from '@testing-library/react-native';
import Base from './Base';

describe('Base', () => {


  // it('renders the username correctly', () => {
  //   const { getByText } = render(
  //     <Base userName="John Doe" isTutor={true}>
  //       <></>
  //     </Base>,
  //   );
  //   const usernameText = getByText('John Doe');
  //   expect(usernameText).toBeDefined();
  // });

  // it('renders the student/tutor status correctly', () => {
  //   const { getByText } = render(
  //     <Base userName="John Doe" isTutor={false}>
  //       <></>
  //     </Base>,
  //   );
  //   const studentText = getByText('Student');
  //   expect(studentText).toBeDefined();
  // });

  // it('renders with no errors when userName prop is not provided', () => {
  //   const { getByTestId } = render(<Base isTutor={true}>Some children</Base>);
  //   const container = getByTestId('base-container');
  //   expect(container).toBeTruthy();
  // });




  // it('renders without errors when the isTutor prop is not provided', () => {
  //   const { getByText } = render(<Base userName="John Doe">Hello World</Base>);
  //   expect(getByText('Hey')).toBeDefined();
  //   expect(getByText('John Doe')).toBeDefined();
  //   expect(getByText('Student')).toBeDefined();
  // });


  // it('renders with no errors when no children are provided', () => {
  //   const { getByTestId } = render(<Base userName="John Doe" isTutor={false} />);
  //   expect(getByTestId('base-container')).toBeDefined();
  // });


  // it('renders a default value when isTutor prop is not provided', () => {
  //   const { getByTestId } = render(<Base userName="John Doe" />);
  //   const studentText = getByTestId('student-text');
  //   expect(studentText.props.children).toBe('Student');
  // });

  it('renders with no errors when the isTutor prop is null', () => {
    const { getByTestId } = render(<Base userName="John Doe" isTutor={null} />);
    expect(getByTestId('student')).toHaveTextContent('Student');
  });

  it('renders with no errors when the isTutor prop is undefined', () => {
    const { getByTestId } = render(<Base userName="John Doe" isTutor={undefined} />);
    expect(getByTestId('student')).toHaveTextContent('Student');
  });

  it('renders with no errors when the isTutor prop is a non-boolean value', () => {
    const { getByTestId } = render(<Base userName="John Doe" isTutor={123} />);
    expect(getByTestId('student')).toHaveTextContent('Student');
  });

});
