import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-neutral-900 min-h-screen flex items-center">
      <section className="px-10 container m-auto">
        <App />
      </section>
    </main>
  </React.StrictMode>
);
