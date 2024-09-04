import Image from "next/image";
import styles from "./page.module.css";
import MovieCard from "./components/MovieCard";
// https://api.themoviedb.org/3/movie/popular?api_key=959d944b439d7313c885cf0bb5237706
const apiKey = "959d944b439d7313c885cf0bb5237706";
console.log(apiKey);

const getMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const movieList = await res.json();
  return movieList;
};
export default async function Home() {
  const list = await getMovies();
  console.log(list);
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Movie Database</h1>
      <div className={styles.card}>
        {list.results.length > 0 &&
          list.results.map((movie: any) => (
            <MovieCard
              // poster_path, title, description, id
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              description={movie.overview}
              id={movie.id}
            />
          ))}
      </div>
    </main>
  );
}
