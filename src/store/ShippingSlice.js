import { createSlice } from "@reduxjs/toolkit";

const ShippingSlice = createSlice({
    name: 'shippingSlice',
    initialState: null,
    reducers: {
        setShipping(state, action){
            return state = action.payload
        }
    }
})


export const shippingActions = ShippingSlice.actions
export const shippingReducer = ShippingSlice.reducer