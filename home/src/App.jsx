import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <>
    <Header title={`Fidget Spinners`} />
    <main className="mt-10 text-3xl mx-auto max-w-6xl">
      <Routes />
    </main>
    <Footer content={`2022 Goku San`} />
  </>
);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
