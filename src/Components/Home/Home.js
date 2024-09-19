import Post from "../Post/Post";
import { useState, useEffect, Redirect } from "react";
import { Router, BrowserRouter } from "react-router-dom";
function Home({ dataList }) {
  return (
    <div className="posters">
      {dataList.map((ele) => (
        <Post key={ele.id} ele={ele} />
      ))}
    </div>
  );
}
export default Home;
