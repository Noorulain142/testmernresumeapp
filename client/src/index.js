import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import { PortfolioContextProvider } from "../src/api/context/PortfolioContext";

// import Navbar from "./components/Main/navbar";
// import { Provider } from "react";
// import {createStore, applyMiddleware, compose} from 'redux'
// import {thunk} from 'redux-thunk'
// import reducers from './api/reducers'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const user = localStorage.getItem("user");

// const store = createStore(reducers,compose(applyMiddleware(thunk)))
root.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortfolioContextProvider>
  </React.StrictMode>
);
