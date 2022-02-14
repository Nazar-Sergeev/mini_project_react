import {Header, Layout, MoviesByGenre, MoviesDetails} from "./components";
import {Route, Routes} from "react-router-dom";
import {GenrePage, HomePage, MoviesPage} from "./pages";

const App = () => {

    {/*<Route path={'/'} element={<Layout/>}/>*/
    }
    {/*<Route index element={<MoviesPage/>}/>*/
    }
    return (
        <div style={{minWidth: '1250px'}}>
            <Header/>
            <hr/>
            <Routes>

                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MoviesDetails/>}/>
                </Route>

                <Route path={'genres'} element={<GenrePage/>}>
                    <Route path={':genre_id'} element={<MoviesByGenre/>}/>
                </Route>

            </Routes>
        </div>
    );
};


export default App;
