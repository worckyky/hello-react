import profileReducer, { addPostAC, deletePostAC } from './profile-reducer';
import { profilePageType } from './store';

let state: profilePageType = {
  postData: [
    { id: '1', message: 'Hi, how are you?', likesCount: 12 },
    { id: '2', message: "it's my first post", likesCount: 6 },
    { id: '3', message: 'Hi, how are you?', likesCount: 12 },
    { id: '4', message: "it's my first post", likesCount: 16 },
    { id: '5', message: 'Hi, how are you?', likesCount: 17 },
  ],
  profile: null,
  status: '',
};

it('length of posts should be incremented', () => {
  let action = addPostAC('it-kamasutra.com');
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(6);
});

it('message of new post should be correct', () => {
  let action = addPostAC('it-kamasutra.com');
  let newState = profileReducer(state, action);
  expect(newState.postData[5].message).toBe(
    'it-kamasutra.com'
  );
});

it('length after post deleting should be decrement', () => {
  let action = deletePostAC('5');
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(5);
});
