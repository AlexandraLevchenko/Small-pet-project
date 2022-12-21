import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import Header from "./HeaderComponent/Header";
import Footer from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
