import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../moviesService";
import css from "./MovieCast.module.css";

const defaultActorImg = "https://via.placeholder.com/150?text=No+Image";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error("Помилка при завантаженні акторського складу", error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div className={css.container}>
      {cast.map((actor) => (
        <div key={actor.id} className={css.info}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : defaultActorImg
            }
            alt={actor.name}
            width={150}
            className={css.img}
          />
          <p className={css.title}>{actor.name}</p>
        </div>
      ))}
    </div>
  );
}
