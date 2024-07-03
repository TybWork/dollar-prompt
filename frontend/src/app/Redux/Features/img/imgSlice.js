import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    abcFiles: [],
};

export const imgSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setabcFiles: (state, action) => {
            state.abcFiles = action.payload;
        },
        // Optional: Add other reducers as needed
        clearabcFiles: (state) => {
            state.abcFiles = [];
        },
    },
});

// Export actions
export const { setabcFiles, clearabcFiles } = imgSlice.actions;

// Export reducer
export default imgSlice.reducer;