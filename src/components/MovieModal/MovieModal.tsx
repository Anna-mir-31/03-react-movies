
import type { Movie } from '../../types/movie';
import css from './MovieModal.module.css';

type Props = {
  movie: Movie;
  onClose: () => void;
};

export default function MovieModal({ movie, onClose }: Props) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </div>
  );
}
