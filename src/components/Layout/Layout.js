import {MoviesPage} from "../../pages";
import {Header} from "../Header/Header";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Layout = () => {
    const {handleSubmit, reset, register} = useForm();

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to={'/genres'}>
                <button>Genres page</button>
            </Link>

            {/*onSubmit={handleSubmit(submit)}*/}

            <form>
                <input type="text" placeholder={'movie'} {...register('movie')}/>
                <button>search</button>
            </form>

            <Link to={'/movies'}>
                <button>Movies page</button>
            </Link>
        </div>
    );
};


export {Layout};