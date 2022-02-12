import {MoviePage} from "../../pages";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieService} from "../../services";
import {getAllMovies, getPageMovie} from "../../store";

const Layout = () => {

    const { page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dsfsdfsdfsdfsdfsdf")
        dispatch(getAllMovies)
    },[])

    return (
        <div>
            <MoviePage/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button style={{marginRight:'10px'}}>previous page</button>
                <button onClick={() => dispatch(getPageMovie(page,'next'))}>next page</button>
            </div>
        </div>
    );
};


export {Layout};