import {urlImage} from "../../configs/urls";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {

    const {id,original_title, overview, poster_path, vote_average, vote_count, release_date, genre_ids} = movie;

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