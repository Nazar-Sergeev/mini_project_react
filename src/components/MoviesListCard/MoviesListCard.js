import {urlImage} from "../../configs/urls";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const MoviesListCard = ({movie}) => {
    // const {genres:{genres}} = useSelector(state => state.genres);

    const {id,original_title, overview, poster_path, vote_average, vote_count, release_date, genre_ids} = movie;

    // const getMoviesGenre = (genre_ids) => {
    //     return genre_ids.map(genreId => {
    //         return genres.filter(genre => genre.id === genreId)[0].name
    //     })
    // }

    // const {id,original_title, overview, poster_path, vote_average, vote_count, release_date, genre_ids} = getMoviesGenre


    return (
        <div style={{width: '300px', border:'1px solid black', marginBottom:'5px'}}>
            <div>
                <img src={`${urlImage}${poster_path}`} alt={original_title}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <p>Rating: {vote_average} - total votes: {vote_count}</p>
                <p>{overview}</p>
                <p>Release date: {release_date}</p>
            </div>
            <div>
                <Link to={`/movies/${id.toString()}`} state={{id, original_title, genre_ids}}>
                    <button>details movie</button>
                </Link>
            </div>
        </div>
    );
};


export {MoviesListCard};