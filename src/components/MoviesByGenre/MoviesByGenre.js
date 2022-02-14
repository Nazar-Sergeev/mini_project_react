import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getAllGenresById, getGenreId, getMovieByPage} from "../../store/movieByGenre.slice";
import {useEffect} from "react";
import {MovieByGenre} from "../MovieByGenre/MovieByGenre";
import {getPage} from "../../store";

const MoviesByGenre = () => {

    const {movieByGenres: {results: movieByGenres}, page} = useSelector(state => state.movieByGenres);

    const dispatch = useDispatch();

    const {genre_id} = useParams();

    dispatch(getGenreId(genre_id))

    useEffect(() => {
        if (genre_id) {
            dispatch(getAllGenresById({genre_id, page: 1}))
        }
    }, [genre_id])

    useEffect(() => {
        dispatch(getAllGenresById({page}))
    }, [page])

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                {
                    movieByGenres && movieByGenres.map(movie => <MovieByGenre key={movie.id} movie={movie}/>)
                }
            </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                    <button
                        onClick={() => dispatch(getMovieByPage({data: 'previous'}))}>previous page
                    </button>
                    <button onClick={() => dispatch(getMovieByPage({data: 'next'}))}>next page</button>
                </div>
        </div>
    );
};


export {MoviesByGenre};