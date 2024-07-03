import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Features/counter/CounterSlice'
import navbarReducer from '../Redux/Features/navbar/navbarSlice'
import fileReducer from '../Redux/Features/img/imgSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        navbar: navbarReducer,
        file: fileReducer
    },
})