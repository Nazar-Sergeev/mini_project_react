import {Route, Routes} from "react-router-dom";

import {Header, Layout, MoviesByGenre, MoviesDetails} from "./components";
import {GenrePage, MoviesPage} from "./pages";

const App = () => {

    return (
        <div style={{minWidth: '1250px'}}>
            <Header/>
            <hr/>
            <Routes>

                <Route path={'/'} element={<Layout/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MoviesDetails/>}/>
                </Route>

                <Route path={'/genres'} element={<GenrePage/>}>
                    <Route path={':genre_id'} element={<MoviesByGenre/>}/>
                </Route>

            </Routes>
        </div>
    );
};


export default App;
