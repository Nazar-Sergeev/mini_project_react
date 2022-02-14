import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {getAllMovies} from "../../store";

const MoviesList = () => {

    const {movies: {results: movies}, page} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page))
    }, [page]);

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '20px', marginBottom: '20px'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {movies && movies.map(res => <MoviesListCard key={res.id} movie={res}/>)}
            </div>
        </div>
    );
};

export {MoviesList};