import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga";
import "./i18next";
import * as serviceWorker from "./serviceWorker";
import Loading from "./components/Loading";

ReactGA.initialize("UA-22343418-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
