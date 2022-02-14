import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../services/genre.service";

export const getAllGenresById = createAsyncThunk(
    'getAllGenresById/movieByGenreSlice',
    async ({page, genre_id}) => {
        const genres = await genreService.getGenreById(page, genre_id)
        return {movieByGenres: genres.data.results, data: genres.data}
    }
);


const movieByGenreSlice = createSlice({
    name: 'movieByGenreSlice',

    initialState: {
        movieByGenres: [],
        page: 1,
        genreId: 0,
        status: null
    },
    reducers: {
        getGenreId: (state, action) => {
            state.genreId = action.payload.genre_id
        },
        getMovieByPage: (state, action) => {
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
        [getAllGenresById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movieByGenres = action.payload.data
        }
    }
})

const movieByGenreReducer = movieByGenreSlice.reducer

export const {getGenreId, getMovieByPage} = movieByGenreSlice.actions
export default movieByGenreReducer;