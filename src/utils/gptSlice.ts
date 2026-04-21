import { createSlice } from "@reduxjs/toolkit";

const gptSLice  = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = ! state.showGptSearch;
        },
        addGptMovieResult: (state,action) => {
            state.gptMovies = action.payload;
        }
    },
});

export const {toggleGptSearchView, addGptMovieResult} = gptSLice.actions;
export default gptSLice.reducer;