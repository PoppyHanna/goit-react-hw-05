import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {/* {movies.map((movie) => (
        <li key={movie.id} className={css.listItem}>
          <h3 className={css.movieName}>{movie.name}</h3>
        </li>
      ))} */}
    </ul>
  );
}
