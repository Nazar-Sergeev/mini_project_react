import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const MoviesDetails = () => {

    // const {genres} = useSelector(state => state.genres);
    const state = useLocation();
// console.log(genres)

    const moviesDetails = state.state

    const {genre_ids,original_title} = moviesDetails
    // console.log(original_title)

// console.log(genre_ids)
//     const getMoviesGenre = (genre_ids) => {
//         return genre_ids.map(genreId => {
//             console.log(genreId)
//             return genres.filter(genre => genre.id === genreId)[0].name
//         })
//     }

    // const {movieGenres, setMovieGenres} = useState([]);

    // useEffect(() => {
    //     setMovieGenres(getMoviesGenre(genre_ids))
    // },[genre_ids])

    return (
        <div>
            {/*{movieGenres.map(movieGenre => <div>{movieGenre}</div>)}*/}
            MoviesDetails
            {/*<h2>{genre_ids} - {original_title}</h2>*/}
        </div>
    );
};


export {MoviesDetails};