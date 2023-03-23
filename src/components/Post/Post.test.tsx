import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Post from './PostCard';

describe('Post', () => {
  const user = {
    name: 'John',
    image: 'https://www.example.com/image.png',
    username: '@johndoe',
    bio: 'Lorem ipsum',
    is_tutor: false,
  };

  const post = {
    user: user,
    date: '2022-01-01',
    comments_count: 3,
    likes_count: 5,
    dislikes_count: 2,
    is_anonymous: false,
    is_saved: false,
    tags: ['React', 'JavaScript'],
    is_liked: false,
    is_disliked: false,
    text: 'Lorem ipsum dolor sit amet',
    on_like_Pressed: jest.fn(),
    on_dislike_Pressed: jest.fn(),
    on_comment: jest.fn(),
    onSaved: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Post {...post} />);

    // Check if user's name and username are rendered
    expect(getByText(user.name)).toBeTruthy();
    expect(getByText(user.username)).toBeTruthy();

    // Check if post text is rendered
    expect(getByText(post.text)).toBeTruthy();

    // Check if tags are rendered
    expect(getByText(post.tags[0])).toBeTruthy();
    expect(getByText(post.tags[1])).toBeTruthy();

    // Check if icons for comments, likes, dislikes and save are rendered
    expect(getByTestId('comment-icon')).toBeTruthy();
    expect(getByTestId('like-icon')).toBeTruthy();
    expect(getByTestId('dislike-icon')).toBeTruthy();
    expect(getByTestId('save-icon')).toBeTruthy();


  });

  it('calls on_like_Pressed when the like icon is pressed', () => {
    const {getByTestId} = render(<Post {...post} />);
    fireEvent.press(getByTestId('like-icon'));
    expect(post.on_like_Pressed).toHaveBeenCalled();
  });
  it('calls on_dislike_Pressed when the dislike icon is pressed', () => {
    const {getByTestId} = render(<Post {...post} />);
    fireEvent.press(getByTestId('dislike-icon'));
    expect(post.on_dislike_Pressed).toHaveBeenCalled();
  });
  it('calls on_comment when the comment icon is pressed', () => {
    const {getByTestId} = render(<Post {...post} />);
    fireEvent.press(getByTestId('comment-icon'));
    expect(post.on_comment).toHaveBeenCalled();
  });
  it('calls onSave when the save icon is pressed', () => {
    const {getByTestId} = render(<Post {...post} />);
    fireEvent.press(getByTestId('save-icon'));
    expect(post.onSaved).toHaveBeenCalled();
  });
})