import {configureStore} from '@reduxjs/toolkit'
import UserSlice from '../features/userSlice/UserSlice';



const store = configureStore(
    {
        reducer:{

            userInformationReducer: UserSlice
        }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDisptach= typeof store.dispatch
export default store;