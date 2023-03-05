import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        addToCart(state, action) {
           const index = state.findIndex(el => el.id === action.payload.id)

            if(index < 0){
                state.push(action.payload)
            }else{
                state[index].amount += action.payload.amount
            }
            state.forEach(el => {
                el.total = el.amount * +el.price.slice(1)
            })
        },
        removeFromCart(state, action){
            const index = state.findIndex(el => +el.id === +action.payload)
            state = state.splice(index, 1)
        },
        emptyCart(state, action){
            return state = []
        }
    }
})


export const cartActions = CartSlice.actions
export const cartReducer = CartSlice.reducer