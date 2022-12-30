import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetails } from "./components/HomePage/BlogDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
