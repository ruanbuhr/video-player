export default function Video({ key, thumbnails, title }) {
  return (
    <div>
      <img src={thumbnails.default.url}></img>
      <h3>{title}</h3>
    </div>
  );
}
