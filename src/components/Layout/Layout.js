import {MoviePage} from "../../pages";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {movieService} from "../../services";

const Layout = () => {

    return (
        <div>
            <MoviePage/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button style={{marginRight:'10px'}}>previous page</button>
                <button>next page</button>
            </div>
        </div>
    );
};


export {Layout};