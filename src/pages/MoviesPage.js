import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {MoviesList} from "../components";
import {getAllMovies, getPage} from "../store";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {

    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    //

    useEffect(() => {
        dispatch(getAllMovies(page))
    }, [page])

    return (
        <div>
            <Outlet/>
            <MoviesList/>
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <button onClick={() => dispatch(getPage({data: 'first'}))}>first page</button>
                <button
                    onClick={() => dispatch(getPage({data: 'previous'}))}>previous page
                </button>
                <button onClick={() => dispatch(getPage({data: 'next'}))}>next page</button>
            </div>
        </div>
    );
};


export {MoviesPage};