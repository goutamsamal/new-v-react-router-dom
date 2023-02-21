import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/_app";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Fragment>
        <App />
    </Fragment>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
