import Image from "next/image";
import styles from "./MovieDetails.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

interface MovieDetailsProps {
  posterPath: string;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
}
const MovieDetails = ({
  posterPath,
  title,
  description,
  releaseDate,
  rating,
}: MovieDetailsProps) => {
  return (
    <div>
      <Link href={"/"}>
        <button className={styles.backButton}>Back</button>
      </Link>
      <div className={styles.container}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={200}
          height={400}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description.substring(0, 200)}...
          </p>
          <p className={styles.releaseDate}>Release Date: {releaseDate}</p>
          <p className={styles.rating}>Rating: {rating}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
