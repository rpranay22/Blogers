import "./styles.css";
import Post from "./Components/Post/Post";
import { useState, useEffect, Redirect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}
