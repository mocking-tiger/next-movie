export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const movies = await getMovies();
  return <main>{JSON.stringify(movies)}</main>;
}
