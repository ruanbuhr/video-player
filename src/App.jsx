import { useState } from "react";
import "./App.css";
import Header from "../components/Header.jsx";
import VideoList from "../components/VideoList.jsx";
function App() {
  const [query, setQuery] = useState("Video Title");
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
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
        <VideoList data={data} isLoading={isLoading}></VideoList>
      </div>
    </div>
  );
}

export default App;
