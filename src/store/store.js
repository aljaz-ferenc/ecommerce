import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { categoryReducer } from "./CategorySlice";
import { personalInfoReducer } from "./PersonalInfoSlice";
import { shippingReducer } from "./ShippingSlice";
import { stateReducer } from "./StateSlice";
import { storeReducer } from "./StoreSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    store: storeReducer,
    category: categoryReducer,
    cart: cartReducer,
    shipping: shippingReducer,
    personalInfo: personalInfoReducer,
    state: stateReducer

})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store
