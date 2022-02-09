import {urlImage} from "../../configs/urls";

const MoviesListCard = ({movie}) => {
    const {original_title, overview, poster_path, vote_average, vote_count, release_date} = movie;

    return (
        <div>
            <div>
                <img src={`${urlImage}${poster_path}`} alt={original_title}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <p>Rating: {vote_average} - total votes: {vote_count}</p>
                <p>{overview}</p>
                <p>Release date: {release_date}</p>
            </div>
        </div>
    );
};


export {MoviesListCard};