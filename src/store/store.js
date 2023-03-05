import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { categoryReducer } from "./CategorySlice";
import { personalInfoReducer } from "./PersonalInfoSlice";
import { shippingReducer } from "./ShippingSlice";
import { stateReducer } from "./StateSlice";
import { storeReducer } from "./StoreSlice";

const store = configureStore({
    reducer: {
        store: storeReducer,
        category: categoryReducer,
        cart: cartReducer,
        shipping: shippingReducer,
        personalInfo: personalInfoReducer,
        state: stateReducer
    }
})

export default store