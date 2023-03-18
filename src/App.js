import React from "react";
import HomePage from "./component/home";
import AboutPage from "./component/about";
import BlogPage from "./component/blog";
import ContactPage from "./component/contact";
import TstNav from "./component/navl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
          <Route path="/" element={<TstNav />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
