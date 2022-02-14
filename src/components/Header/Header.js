// import {Link} from "react-router-dom";
// import {useForm} from "react-hook-form";
// import {useDispatch, useSelector} from "react-redux";
// import {getFilter} from "../../store";
// import {useEffect} from "react";
//
// const Header = () => {
//
//     // const {movies: {results: movies}} = useSelector(state => state.movies);
//     // console.log(movies)
//
//     // const {register, handleSubmit, reset} = useForm();
//
//     // const dispatch = useDispatch();
//
//         // let newMovies = movik.map(mov => mov.title)
//         // const {title} = newMovies;
//         // console.log(newMovies)
//
//     // const filter = () => {
//     //     return newMovies;
//     // }
//     // filter()
//     // let newMovies = movies.map(mov => mov.title)
//     // console.log(newMovies)
//
//     // const getFilter = () => {
//         // let newArray = [...newMovies]
//         // if (data.movie) {
//         //     newArray = newArray.filter(el => el.toLowerCase().includes(data.movie.toLowerCase()))
//         // }
//         // console.log(newArray)
//         // return newArray
//     // }
//
//
//     // const submit = (data) => {
//         // console.log(data)
//         // dispatch(getFilter({data}))
//         // console.log(data.movie)
//         // reset();
//     // }
//
//     //
//     // useEffect(() => {
//     //
//     // },[])
//
//     return (
//         <div style={{display: 'flex', justifyContent: 'space-around'}}>
//             <Link to={'/'}>
//                 <button>Home page</button>
//             </Link>
//
//             <form onSubmit={handleSubmit(submit)}>
//                 <input type="text" placeholder={'movie'} {...register('movie')}/>
//                 <button>search</button>
//             </form>
//
//             <Link to={'/movies'}>
//                 <button>Movies page</button>
//             </Link>
//         </div>
//     );
// };
//
// export {Header};

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

                {/*onSubmit={handleSubmit(submit)}*/}

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