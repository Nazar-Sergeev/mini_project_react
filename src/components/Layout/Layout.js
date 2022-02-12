import {MoviePage} from "../../pages";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieService} from "../../services";
import {getAllMovies, getPageMovie} from "../../store";

const Layout = () => {

    const {page} = useSelector(state => state.movies);

    // console.log(page)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("LAYOUT")
        dispatch(getAllMovies(page))
    },[page])

    return (
        <div>
            <MoviePage/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button style={{marginRight:'10px'}}
                        onClick={() => dispatch(getPageMovie({data:'previous'}))}>previous page</button>
                <button onClick={() => dispatch(getPageMovie({data:'next'}))}>next page</button>
            </div>
        </div>
    );
};


export {Layout};