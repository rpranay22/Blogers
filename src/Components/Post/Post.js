import "./Post.css";
import { Link } from "react-router-dom";
import { useState, useEffect, Redirect } from "react";
function Post(props) {
  const { ele } = props;

  return (
    <div className="post">
      <h1 className="head">{ele.title}</h1>
      <p>{ele.body}</p>
      <Link to={`/fullDetails/${ele.id}`}>
        {" "}
        <button>Read More</button>
      </Link>
    </div>
  );
}
export default Post;
