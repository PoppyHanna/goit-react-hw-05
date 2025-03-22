import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../moviesService";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error("Помилка при завантаженні фільмів!", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Трендові фільми!!!</h2>
      <MovieList movies={movies} />;
    </div>
  );
}
