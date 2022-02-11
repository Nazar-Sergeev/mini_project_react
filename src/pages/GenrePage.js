import {Genre} from "../components/Genre/Genre";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from "../store";

const GenrePage = () => {
    //
    // const {genres: {genres: arrayGenre}} = useSelector(state => state.genres);
    // console.log(arrayGenre)
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(getAllGenres())
    // },[])

    return (
        <div>
            <div>
                {/*{arrayGenre && arrayGenre.map(el => <Genre key={el.id} item={el}/>)}*/}
            </div>
        </div>
    );
};


export {GenrePage};