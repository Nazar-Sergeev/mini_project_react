import {Link} from "react-router-dom";

const Genre = ({genre}) => {

    const {id, name} = genre
    return (
        <div>
            <Link to={`/genres/${id}`} state={id} >
                <button>{name}</button>
            </Link>
        </div>
    );
};


export {Genre};