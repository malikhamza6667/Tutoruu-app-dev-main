import {combineReducers} from '@reduxjs/toolkit'


import { userSlice } from '../reducers/Dummy/DummyReducer'


const rootReducer= combineReducers({

})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;