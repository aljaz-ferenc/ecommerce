import { createSlice } from "@reduxjs/toolkit";

const PersonalInfoSlice = createSlice({
    name: 'personalInfoSlice',
    initialState: null,
    reducers: {
        setPersonalInfo(state, action){
            return state = action.payload
        }
    }
})


export const personalInfoActions = PersonalInfoSlice.actions
export const personalInfoReducer = PersonalInfoSlice.reducer