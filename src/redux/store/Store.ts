import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userSlice } from '../reducers/Dummy/DummyReducer';


const store = configureStore({
  reducer: userSlice
});

export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = (...args: any[]) => void;
export type AppSelector<T> = (state: RootState) => T;

export default store;