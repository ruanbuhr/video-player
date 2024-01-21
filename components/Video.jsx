import styles from "../stylemodules/video.module.css";
export default function Video({ key, thumbnails, title }) {
  return (
    <div className={styles.vidcontainer}>
      <img className={styles.vidimg} src={thumbnails.default.url}></img>
      <h3>{title}</h3>
    </div>
  );
}
