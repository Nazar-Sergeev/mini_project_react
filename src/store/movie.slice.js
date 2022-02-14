import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";

export const getAllMovies = createAsyncThunk(
    'getAllMovies/movieSlice',
    async (page) => {
        return await movieService.getAll(page);

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        page: 1,
        movieDetails: [],
        status: null
    },
    reducers: {

        getPage: (state, action) => {
            if (action.payload.data === 'previous') {
                state.page = state.page - 1
                if (state.page < 1) {
                    state.page = 1
                }
            } else if (action.payload.data === 'next') {
                state.page = state.page + 1;
            } else if (action.payload.data === 'first') {
                state.page = 1
            }
        }
    },

    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer

export const {getPage} = movieSlice.actions
export default movieReducer;