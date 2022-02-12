import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {MoviesList} from "../components";
import {getAllMovies, getPageMovie} from "../store";

const MoviesPage = () => {

    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page))
    },[page])


    return (
        <div>
            <MoviesList/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button style={{marginRight:'10px'}}
                        onClick={() => dispatch(getPageMovie({data:'previous'}))}>previous page</button>
                <button onClick={() => dispatch(getPageMovie({data:'next'}))}>next page</button>
            </div>
        </div>
    );
};


export {MoviesPage};