"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/movie.module.css";

export default function Movie({ movie }) {
  const router = useRouter();
  return (
    <div key={movie.id} className={styles.movie}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        onClick={() => router.push(`/movies/${movie.id}`)}
      />
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}
