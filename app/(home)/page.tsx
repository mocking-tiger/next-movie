import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

type MovieType = {
  id: number;
  title: string;
};

async function getMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <main>
      {movies.map((movie: MovieType) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </main>
  );
}
