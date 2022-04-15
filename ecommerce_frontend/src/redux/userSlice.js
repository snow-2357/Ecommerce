import { createSlice } from "@reduxjs/toolkit"

const userSlice =createSlice({
    name :"user",
    initialState:{
        currentUser:false,
        isFetching:false,
        UserId:null,
        error:false
    },
    reducers:{
        loginStart   : (state) => {
            // state.isFetching=true;
            state.currentUser=null;
        },
        loginSuccess : (state,action) => {
            //state.isFetching=false;
            state.currentUser=action.payload;
            // state.currentUser=true;
        },
        setUserID :(state,action) =>{
            state.UserId=action.payload;
        },
        loginFailure : (state) => {
            //state.isFetching=false;
            //state.error=true;
        },
    }
})


export const { loginStart, loginSuccess, loginFailure , setUserID} = userSlice.actions;

export default userSlice.reducer