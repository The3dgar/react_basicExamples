import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FetchExample from "./sections/FetchExample";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
    <FetchExample></FetchExample>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
