import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <Link to={'/'}><button>Home page</button></Link>
            <Link to={'/movie'}><button>Movie page</button></Link>
        </div>
    );
};


export {Header};