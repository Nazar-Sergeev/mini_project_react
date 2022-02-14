import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {getAllGenres, getAllMovies} from "../../store";
import {Genre} from "../Genre/Genre";

const MoviesList = () => {

// : {genres: arrayGenre}

    const {movies: {results: movies}, page} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    const getMoviesGenre = (genre_ids) => {
        return genre_ids.map(genreId => {
            return genres.filter(genre => genre.id === genreId)[0].name
        })
    }

    // useEffect(() => {
    // console.log('Movie List')
    // dispatch(getAllMovies())
    // dispatch(getAllGenres())
    //
    // }, []);

    useEffect(() => {
        dispatch(getAllMovies(page))
    }, [page]);

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '20px', marginBottom: '20px'}}>
            {/*<div>*/}
            {/*    {arrayGenre && arrayGenre.map(el => <Genre key={el.id} item={el}/>)}*/}
            {/*</div>*/}
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {movies && movies.map(res => <MoviesListCard key={res.id} movie={res} getMoviesGenre={getMoviesGenre}/>)}
            </div>
        </div>
    );
};


export {MoviesList};