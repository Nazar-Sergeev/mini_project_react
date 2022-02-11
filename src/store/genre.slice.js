import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../services/genre.service";

export const getAllGenres = createAsyncThunk(
    'getAllGenres/genreSlice',
    async () => {
        return await genreService.getAll()
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        status: null
    },
    reducers: {},
    extraReducers: {

        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        }
    }

});

const genreReducer = genreSlice.reducer;

export default genreReducer;