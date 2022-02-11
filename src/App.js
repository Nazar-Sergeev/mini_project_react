import {Header, Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {GenrePage, MoviePage} from "./pages";

const App = () => {

    return (
        <div>
            <Header/>
            <hr/>
            <Routes>
                <Route index element={<Layout/>}/>
                <Route path={'home'} element={<GenrePage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
            </Routes>
        </div>
    );
};


export default App;
