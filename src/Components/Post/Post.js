import "./Post.css";
import { useState, useEffect, Redirect } from "react";
function Post(props) {
  const { ele, getFullDetails } = props;
  const getS = () => {
    <Redirect to="/fullDetails" />;
    getFullDetails(ele.id);
  };
  return (
    <div className="post">
      <h1 className="head">{ele.title}</h1>
      <p>{ele.body}</p>
      <button onClick={getS}>Read More</button>
    </div>
  );
}
export default Post;
