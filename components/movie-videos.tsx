import { API_URL } from "../config";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  // console.log("fetching videos");
  // await new Promise((resoleve) => setTimeout(resoleve, 3000));
  // throw new Error("에러 발생");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
