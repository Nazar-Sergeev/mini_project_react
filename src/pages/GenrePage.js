import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from "../store";
import {Genre} from "../components/Genre/Genre";
import {Outlet} from "react-router-dom";

const GenrePage = () => {

    const {genres:{genres}} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    },[])
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