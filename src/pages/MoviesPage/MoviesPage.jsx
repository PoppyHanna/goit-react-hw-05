import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchMovies } from "../../moviesService";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }

    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      console.error("Помилка при завантаженні фільмів", error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />;
      <MovieList movies={movies} />
    </div>
  );
}

//  useEffect(() => {
//     async function getMovies() {
//       try {
//         const data = await fetchMovies();
//         setMovies(data);
//       } catch (error) {}
//     }

//     getMovies();
//   }, []);
