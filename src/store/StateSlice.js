import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
    name: 'stateSlice',
    initialState: 0,
    reducers: {
        setState(state, action){
            if(+action.payload === 0) return state = 0
            return state = state + action.payload
        }
    }
})


export const stateActions = StateSlice.actions
export const stateReducer = StateSlice.reducer