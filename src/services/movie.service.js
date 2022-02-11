import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs/urls";

export const movieService = {
    getAll: () => axiosService.get(`${urls.movies}?api_key=${apiKey}`).then(value => value.data)
}