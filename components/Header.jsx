import styles from "../stylemodules/header.module.css";
import Search from "./Search";
export default function Header({ query, setQuery, data, setData, setLoading }) {
  return (
    <div className={styles.header}>
      <div className={styles.logocontainer}>
        <img src="../assets/video.png"></img>
        <h1>VideoAPP</h1>
      </div>
      <div className={styles.searchbox}>
        <Search
          query={query}
          setQuery={setQuery}
          setData={setData}
          setLoading={setLoading}
        ></Search>
      </div>
    </div>
  );
}
