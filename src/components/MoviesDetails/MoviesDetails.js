import {useLocation} from "react-router-dom";

import {urlImage} from "../../configs/urls";

const MoviesDetails = () => {

    const state = useLocation();

    const {original_title, overview, release_date, poster_path} = state.state

    return (
        <div>
            <img src={`${urlImage}/${poster_path}`} alt={original_title}/>
            <h2>{original_title}</h2>
            <h3>Release date: {release_date}</h3>
            <p>{overview}</p>
        </div>
    );
};

export {MoviesDetails};