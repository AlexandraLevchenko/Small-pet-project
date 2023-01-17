import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import Header from "./HeaderComponent/Header";
import Footer from "./Footer/Footer";
import { CubeContextProvider } from "./context/cubeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <Header/>
    <CubeContextProvider>
    <App/>
    </CubeContextProvider>
    <Footer/>
  </React.StrictMode>
);
