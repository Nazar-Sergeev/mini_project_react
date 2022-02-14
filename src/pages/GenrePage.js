import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

import {getAllGenres} from "../store";
import {Genre} from "../components/Genre/Genre";

const GenrePage = () => {

    const {genres: {genres}} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])
    return (
        <div>
            <div style={{display: 'flex'}}>
                {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {GenrePage};