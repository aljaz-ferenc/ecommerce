import {createSlice} from '@reduxjs/toolkit'

const StoreSlice = createSlice({
    name: 'storeSlice',
    initialState: null,
    reducers: {
        setStore(state, action){
            return state = action.payload
        }
    }
})

export const storeActions = StoreSlice.actions
export const storeReducer = StoreSlice.reducer