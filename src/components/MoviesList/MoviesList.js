import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllMovies} from "../../store/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const {movies: {results}} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, []);

    return (
        <div>
            {results && results.map(res => <MoviesListCard key={res.id} movie={res}/>)}
        </div>
    );
};


export {MoviesList};