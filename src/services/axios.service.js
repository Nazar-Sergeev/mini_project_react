import axios from "axios";

import baseURL from "../configs/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzRhZTYwNDk2Y2IwYzA3NDhjZDdhOWQ4ZWQxYjdmMSIsInN1YiI6IjYwY2RjNzRlOWE5ZTIwMDA2ZDU4NDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSuwKI597Yx8h2m3NItZwSjt2kMS1siRE7hDRu295oM'
    }
})