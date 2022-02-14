import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Header = () => {
    const {handleSubmit, reset, register} = useForm();

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to={'/genres'}>
                    <button>Genres page</button>
                </Link>
                <form>
                    <input type="text" placeholder={'movie'} {...register('movie')}/>
                    <button>search</button>
                </form>

                <Link to={'/movies'}>
                    <button>Movies page</button>
                </Link>
            </div>
        </div>
    );
};


export {Header};