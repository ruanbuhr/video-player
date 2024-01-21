import Video from "../components/Video.jsx";
import styles from "../stylemodules/videolist.module.css";

export default function VideoList({ data, isLoading, setVidId }) {
  return (
    <div className={styles.vidlist}>
      {isLoading ? (
        <h2>Search Results</h2>
      ) : (
        data.items.map((video) => (
          <Video
            key={video.id.videoId}
            thumbnails={video.snippet.thumbnails}
            title={video.snippet.title}
            setVidId={setVidId}
            videoId={video.id.videoId}
          ></Video>
        ))
      )}
    </div>
  );
}
