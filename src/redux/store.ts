import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./slice";
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootSlice)

export const store = configureStore({
    reducer: persistedReducer,
});



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;