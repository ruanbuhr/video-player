import { useState } from "react";
import "./App.css";
import Header from "../components/Header.jsx";
import VideoList from "../components/VideoList.jsx";
import Player from "../components/Player.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [vidId, setVidId] = useState("");

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        data={data}
        setData={setData}
        setLoading={setLoading}
      ></Header>
      <div>
        <Player vidId={vidId}></Player>
        <VideoList
          data={data}
          isLoading={isLoading}
          setVidId={setVidId}
        ></VideoList>
      </div>
    </div>
  );
}

export default App;
