import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../services/genre.service";


export const getAllGenresById = createAsyncThunk(
    'getAllGenresById/movieByGenreSlice',
    async ({page, genre_id}) => {
        return await genreService.getGenreById(page, genre_id)
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
        }
    },

    extraReducers: {}
})

const movieByGenreReducer = movieByGenreSlice.reducer

export const {getGenreId} = movieByGenreSlice.actions
export default movieByGenreReducer;