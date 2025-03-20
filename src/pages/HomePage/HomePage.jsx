import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {}
      getMovies();
    }
  }, []);

  return <MovieList />;
}
