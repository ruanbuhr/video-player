import styles from "../stylemodules/player.module.css";

export default function Player({ vidId }) {
  return (
    <div className={styles.playercontainer}>
      {vidId.length === 0 ? (
        <h2>Waiting for Video</h2>
      ) : (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${vidId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
