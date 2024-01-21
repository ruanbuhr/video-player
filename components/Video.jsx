import styles from "../stylemodules/video.module.css";
export default function Video({ key, thumbnails, title, setVidId, videoId }) {
  function handleClick(e) {
    setVidId(videoId);
  }

  return (
    <div className={styles.vidcontainer}>
      <img
        className={styles.vidimg}
        src={thumbnails.default.url}
        onClick={(e) => handleClick(e)}
      ></img>
      <h3>{title}</h3>
    </div>
  );
}
