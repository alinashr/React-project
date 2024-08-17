
import { combineReducers, createStore } from "redux";
import { movieReducer } from "./movieReducer";
import { seriesReducer } from "./seriesReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

const rootReducer=combineReducers({
    movieStore: movieReducer,
    seriesStore:seriesReducer,
    cartStore:cartReducer,
    userStore:userReducer
})

// persistConfig le default maa local storage ma store garxa
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

