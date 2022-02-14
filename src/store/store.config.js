import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";
import movieByGenreReducer from "./movieByGenre.slice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        movieByGenres: movieByGenreReducer
    }
});

export default store;