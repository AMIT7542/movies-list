import Image from "next/image";
import styles from "./MovieCard.module.css";
import Link from "next/link";
interface MovieCardProps {
  poster_path: string;
  title: string;
  description: string;
  id: number;
}

const MovieCard = ({ poster_path, title, description, id }: MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className={styles.card}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description.substring(0, 200)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
