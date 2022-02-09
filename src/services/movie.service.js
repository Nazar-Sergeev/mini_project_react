import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data)
}