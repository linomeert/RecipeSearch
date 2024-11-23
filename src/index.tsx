import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./index.css";
import Router from "./components/Router";
import reportWebVitals from "./reportWebVitals";

// Create the root element using React 18's new API
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
