"use client";

import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home",
// };

export default function Home() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <main>{isLoading ? "Loading....." : JSON.stringify(movies)}</main>;
}
