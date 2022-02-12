import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',

    async (page) => {
        try {
            return await movieService.getAll(page)

        } catch (e) {
            console.log(e)
        }

    }
);

const movieSlice = createSlice({

    name: 'movieSlice',

    initialState: {
        movies: [],
        status: null,
        page: 1
    },
    reducers: {
        getPageMovie: (state, action) => {
            console.log(action.payload.data)
            if (action.payload.data === 'previous') {
                state.page = state.page - 1
                if (state.page < 1) {
                    state.page = 1
                }
            } else if (action.payload.data === 'next') {
                state.page = state.page + 1;
            }
        }
    },

    extraReducers: {

        [getAllMovies.pending]: (state) => {
            state.status = 'pending'

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {getPageMovie} = movieSlice.actions
export default movieReducer;