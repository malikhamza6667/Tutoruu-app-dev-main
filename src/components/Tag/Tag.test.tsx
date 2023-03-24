import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render( <Tag shape="round" icon='AntDesign' name='caretdown' iconPosition='right' type='primary'>
    GENERAL
  </Tag>);
    const tag = getByTestId('tag');
    expect(tag).toBeDefined();
  });

//   it('changes background color when pressed', () => {
//     const { getByTestId } = render( <Tag shape="round" icon='AntDesign' name='caretdown' iconPosition='right'>
//     GENERAL
//   </Tag>);
//     const tag = getByTestId('tag');
//     fireEvent.press(tag);
//     expect(tag.props.style[1]).toHaveProperty('bg-red-500');
//     fireEvent.press(tag);
//     expect(tag.props.style[1]).toHaveProperty('bg-green-500');
//   });
});
