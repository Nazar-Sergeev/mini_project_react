import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',

    async (page) => {
        try {
        return await movieService.getAll({page})
            
        }catch (e){
            console.log(e)
        }
        
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

        [getAllMovies.pending]:(state) => {
            state.status = 'pending'

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;