import {MoviesList} from "../MoviesList/MoviesList";
import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <MoviesList/>
        </div>
    );
};


export {Layout};