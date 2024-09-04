import MovieDetails from "@/app/components/movieDetails/MovieDetails";
import { title } from "process";

interface MovieDetailsPageProps {
  params: {
    id: string;
  };
}

const getMovieDetails = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=959d944b439d7313c885cf0bb5237706`
  );
  return res.json();
};
const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { id } = params;
  const movieDetails = await getMovieDetails(id);
  console.log(movieDetails);
  return (
    <div>
      <MovieDetails
        posterPath={movieDetails.poster_path}
        title={movieDetails.title}
        description={movieDetails.overview}
        releaseDate={movieDetails.release_date}
        rating={movieDetails.vote_average}
      />
    </div>
  );
};
export default MovieDetailsPage;
