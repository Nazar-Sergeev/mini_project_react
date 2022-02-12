import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs/urls";

export const movieService = {
    getAll: (page) => axiosService.get(`${urls.movies}?api_key=${apiKey}&page=${page}`).then(value => value.data)
}