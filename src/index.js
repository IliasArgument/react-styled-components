import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: consolas;
}
`;

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById("root")
);
