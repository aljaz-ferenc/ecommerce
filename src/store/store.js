import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { categoryReducer } from "./CategorySlice";
import { personalInfoReducer } from "./PersonalInfoSlice";
import { shippingReducer } from "./ShippingSlice";
import { stateReducer } from "./StateSlice";
import { storeReducer } from "./StoreSlice";
import { searchReducer } from "./SearchSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

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
    state: stateReducer,
    search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export default store
