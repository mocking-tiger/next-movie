import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
};

async function getMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <main className={styles.container}>
      {movies.map((movie: MovieType) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
