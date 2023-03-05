import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'searchSlice',
    initialState: 0,
    reducers: {
        setSearch(state, action){
            return state = [action.payload]
        }
    }
})


export const searchActions = SearchSlice.actions
export const searchReducer = SearchSlice.reducer