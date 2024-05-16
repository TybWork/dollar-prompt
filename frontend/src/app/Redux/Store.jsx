import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Features/counter/CounterSlice'
import navbarReducer from '../Redux/Features/navbar/navbarSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        navbar: navbarReducer,
    },
})