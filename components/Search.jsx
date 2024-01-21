import { useState } from "react";
import styles from "../stylemodules/search.module.css";
export default function Search({ query, setQuery, setData, setLoading }) {
  const apiKey = "AIzaSyD1-qwptdTqaFA8zykZ4PU_a06d7cq6gRU";

  function handleChange(e) {
    setQuery(e.target.value);
  }

  async function handleClick(e) {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=${apiKey}`
    );
    const data = await res.json();
    console.log(data);
    setData(data);
    setLoading(false);
  }

  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => handleChange(e)}
      ></input>
      <img
        src="../assets/magnifying-glass.png"
        onClick={(e) => handleClick(e)}
      ></img>
    </div>
  );
}
