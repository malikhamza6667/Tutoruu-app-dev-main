
import { createSlice } from "@reduxjs/toolkit";


type initialStateUser={
    name: string,
    isTutor:boolean,
    token:string

}
const initialState:initialStateUser={
    name: 'hamza',
    isTutor:false,
    token:''

}
const UserInfoSlice= createSlice({
    name:'UserReducerSlice',
    initialState,
    reducers:{
        getUserName:(state,action)=>{
state.name=action.payload
        },
        getAuthToken:(state,action)=>{
            state.token=action.payload
        },
        getUserType:(state,action)=>{
            if(action.payload==null){
state.isTutor=false
            }
            else{
                state.isTutor=true
            }
        }

    }
})


export const {getAuthToken,getUserName,getUserType}=UserInfoSlice.actions

export default UserInfoSlice.reducer