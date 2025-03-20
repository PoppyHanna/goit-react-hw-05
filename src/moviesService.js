import axios from "axios";


const url = "https://api.themoviedb.org";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjkzMjliMzVmZTc4NjI4NDUzOWEyODE4NGJlOTc5MCIsIm5iZiI6MTc0MjM0MjMwOC4wNzYsInN1YiI6IjY3ZGEwOGE0NmQ1NmE5OTFhN2E2YmRmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohQfE1IzUnzKhhaI4axDBIOBF9fts_r0uvKgXhOEGMQ",
  },
};


export const fetchMovies = async () => {
    const resp = await axios.get(url, options);
    return resp.data;
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
};