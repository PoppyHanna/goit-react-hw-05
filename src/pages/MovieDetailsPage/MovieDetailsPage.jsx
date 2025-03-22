import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../moviesService";
import css from "./MovieDetailsPage.module.css";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backBtn = useRef(location.state?.from ?? "/movies");

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (error) {
        console.error("Помилка при завантаженні деталей фільму", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieData) return <p>Завантаження...</p>;

  return (
    <div className={css.btn}>
      <Link to={backBtn.current} className={css.link}>
        Go back
      </Link>

      <h2 className={css.title}>{movieData.title}</h2>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <p className="text-white">{movieData.overview}</p>

      <div className={css.nav}>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          Reviews
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
