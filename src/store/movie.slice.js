import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',

    async () => {
        return await movieService.getAll()
    }
);

const movieSlice = createSlice({

    name: 'movieSlice',

    reducers: {},

    initialState: {
        movies: [],
        status: null
    },
    extraReducers: {

        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;