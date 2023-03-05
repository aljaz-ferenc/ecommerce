import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'categorySlice',
    initialState: null,
    reducers: {
        setCategory(state, action){
            return state = action.payload
        }
    }
})


export const categoryActions = CategorySlice.actions
export const categoryReducer = CategorySlice.reducer