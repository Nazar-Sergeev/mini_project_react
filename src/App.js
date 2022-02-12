import {Header} from "./components";
import {Route, Routes} from "react-router-dom";
import {HomePage, MoviesPage} from "./pages";

const App = () => {

    return (
        <div>
            <Header/>
            <hr/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
            </Routes>
        </div>
    );
};


export default App;
