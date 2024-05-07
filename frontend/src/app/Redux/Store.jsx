import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Features/counter/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})