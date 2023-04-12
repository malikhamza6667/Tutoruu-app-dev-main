import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Post from './PostCard';
import Colors from '../../../assets/Colors';
import '@testing-library/jest-native/extend-expect';
import { Icon } from '../Icon/Icon';

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
    is_anonymous: true,
    is_saved: false,
    tags: ['React', 'JavaScript'],
    is_liked: true,
    is_disliked: true,
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
    expect(getByTestId('comment-icon-view')).toBeTruthy();
    expect(getByTestId('like-icon-view')).toBeTruthy();
    expect(getByTestId('dislike-icon-view')).toBeTruthy();
    expect(getByTestId('save-icon-view')).toBeTruthy();


    expect(getByText(`${post.comments_count}`)).toBeTruthy();
    expect(getByText(`${post.likes_count}`)).toBeTruthy();
    expect(getByText(`${post.dislikes_count}`)).toBeTruthy();
    
    // expect(getByText(post.date)).toBeTruthy();



    // expect(getByTestId('anonymous-icon')).toBeTruthy();



    //  expect(getByTestId('save-icon').props.color).toBe(Colors.lightorange);



    // expect(getByTestId('like-icon')).toHaveStyle({ color:  Colors.orange });
    // expect(getByTestId('dislike-icon')).toHaveStyle({ color:  Colors.orange });

  });
  it('renders the save icon as highlighted when the post is saved', () => {
    const savedPost = { ...post, is_saved: true };
    const { getByTestId } = render(<Post {...savedPost} />);
    const saveIcon = getByTestId('save-icon');
    expect(saveIcon.children[0].props.color).toBe(Colors.orange);
  });

  it('renders the like icon as highlighted when the user has already liked the post', () => {
    const postWithLiked = { ...post, is_liked: true };
    const { getByTestId } = render(<Post {...postWithLiked} />);
    const likeIcon = getByTestId('like-icon');
    expect(likeIcon.children[0].props.color).toBe(Colors.orange);
  });
  
  it('renders the dislike icon as highlighted when the user has already disliked the post', () => {
    const postWithDisliked = { ...post, is_disliked: true };
    const { getByTestId } = render(<Post {...postWithDisliked} />);
    const dislikeIcon = getByTestId('dislike-icon');
    expect(dislikeIcon.children[0].props.color).toBe(Colors.orange);
  });

  it('calls on_like_Pressed when the like icon is pressed', () => {
    // const {getByTestId} = render(<Post {...post} />);
    // fireEvent.press(getByTestId('like-icon'));
    // expect(post.on_like_Pressed).toHaveBeenCalled();
    const onLikeMock = jest.fn();
    const { getByTestId } = render(
      <Post {...post}  on_like_Pressed={onLikeMock} />
    );
    fireEvent.press(getByTestId('like-icon'));
    expect(onLikeMock).toHaveBeenCalled();
  });
  it('calls on_dislike_Pressed when the dislike icon is pressed', () => {
    // const {getByTestId} = render(<Post {...post} />);
    // fireEvent.press(getByTestId('dislike-icon'));
    // expect(post.on_dislike_Pressed).toHaveBeenCalled();

    const onDisLikeMock = jest.fn();
    const { getByTestId } = render(
      <Post {...post}  on_dislike_Pressed={onDisLikeMock} />
    );
    fireEvent.press(getByTestId('dislike-icon'));
    expect(onDisLikeMock).toHaveBeenCalled();
  });
  it('calls on_comment when the comment icon is pressed', () => {
    // const {getByTestId} = render(<Post {...post} />);
    const onCommentMock = jest.fn();
    const { getByTestId } = render(
      <Post {...post}  on_comment={onCommentMock} />
    );
    fireEvent.press(getByTestId('comment-icon'));
    expect(onCommentMock).toHaveBeenCalled();

    // fireEvent.press(getByTestId('comment-icon'));
    // expect(post.on_comment).toHaveBeenCalled();
  });
  it('calls onSave when the save icon is pressed and changes the color', () => {
    const onSavedMock = jest.fn();
    const { getByTestId } = render(
      <Post {...post} is_saved={true} onSaved={onSavedMock} />
    );
   
    expect(getByTestId('save-icon').children[0].props.color).toBe(Colors.orange);
  
    fireEvent.press(getByTestId('save-icon'));
    expect(onSavedMock).toHaveBeenCalled();
  });
})