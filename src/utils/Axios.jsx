import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWIwODk5ZGE0MDdkNGVkZThmYzJjYjVkNDZlZWFjYiIsIm5iZiI6MTcyMTIzNzkzOC4xMjM3NDQsInN1YiI6IjY2OTdmZDViOTQzYTEzYjQ1NmFhMDA0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-0_E5qAJJwiBdUF8BzIAVf39ZRI1sg10lLkh66hCY-I'
      }
})


export default instance;