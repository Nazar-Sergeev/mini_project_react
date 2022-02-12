import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {getAllGenres, getAllMovies} from "../../store";
import {Genre} from "../Genre/Genre";

const MoviesList = () => {

    const {movies: {results: movies}} = useSelector(state => state.movies);
    const {genres: {genres: arrayGenre}} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('Movie List')
        // dispatch(getAllMovies())
        dispatch(getAllGenres())

    }, []);

    return (
        <div style={{display: 'flex'}}>
            <div>
                {arrayGenre && arrayGenre.map(el => <Genre key={el.id} item={el}/>)}
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {movies && movies.map(res => <MoviesListCard key={res.id} movie={res}/>)}
            </div>
        </div>
    );
};


export {MoviesList};