import React from "react";
import HomePage from "./component/home";
import AboutPage from "./component/about";
import BlogPage from "./component/blog";
import ContactPage from "./component/contact";
import TstNav from "./component/navl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>HelloWorld</div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/home" element={<HomePage />}/>
    //       <Route exact path="/" element={<TstNav />} />
    //       <Route exact path="/blogs" element={<BlogPage />} />
    //       <Route exact path="/contact" element={<ContactPage />} />
    //       <Route exact path="/about" element={<AboutPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
