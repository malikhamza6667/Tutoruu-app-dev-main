import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../../graphQLApollo/ClientInstance';

import { GET_USERS } from '../../../graphQLApollo/Queries';
import { RootState } from '../../store/RootReducer';

interface User {
  id: string;
  name: string;
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const { data } = await client.query({ query: GET_USERS });
  return data.users;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const selectUsers = (state: { users: { users: any; }; }) => state.users.users;

export default userSlice.reducer;
