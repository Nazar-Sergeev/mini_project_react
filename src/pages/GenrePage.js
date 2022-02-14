import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from "../store";
import {Genre} from "../components/Genre/Genre";

const GenrePage = () => {

    const {genres} = useSelector(state => state.genres);
    console.log(genres)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    },[])
    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};


export {GenrePage};