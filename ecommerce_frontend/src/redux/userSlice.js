import { createSlice } from "@reduxjs/toolkit"

const userSlice =createSlice({
    name :"user",
    initialState:{
        currentUser:false,
        isFetching:false,
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
        loginFailure : (state) => {
            //state.isFetching=false;
            //state.error=true;
        },
    }
})


export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer