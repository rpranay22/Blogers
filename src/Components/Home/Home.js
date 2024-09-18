import Post from "../Post/Post";
import { useState, useEffect, Redirect } from "react";
import { Router, BrowserRouter } from "react-router-dom";
function Home() {
  const [dataList, setData] = useState([]);
  const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  });
  const getFullDetails = (id) => {
    let obj = dataList.filter((ele) => ele.id === id);
    return obj;
  };
  return (
    <div className="posters">
      {dataList.map((ele) => (
        <Post key={ele.id} ele={ele} getFullDetails={getFullDetails} />
      ))}
    </div>
  );
}
export default Home;
