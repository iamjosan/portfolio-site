import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

const docRoot = document.querySelector("#root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  docRoot
);
