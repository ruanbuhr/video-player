import Video from "../components/Video.jsx";

export default function VideoList({ data, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <h2>Search Results</h2>
      ) : (
        data.items.map((video) => (
          <Video
            key={video.id.videoId}
            thumbnails={video.snippet.thumbnails}
            title={video.snippet.title}
          ></Video>
        ))
      )}
    </div>
  );
}
