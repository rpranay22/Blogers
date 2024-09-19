import "./styles.css";
import Post from "./Components/Post/Post";
import Fullpost from "./Components/DisplayFull/Fullpost";
import { useState, useEffect, Redirect, Switch } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
export default function App() {
  const [dataList, setData] = useState([]);
  const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home dataList={dataList} />} />
          <Route
            exact
            path="/fullDetails/:id"
            element={<Fullpost dataList={dataList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
