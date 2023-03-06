import React from "react";
import "./_base.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Header from "./componants/Header/header";
import Post from "./screens/Post/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
