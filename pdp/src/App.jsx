import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./errors/ErrorBoundary";
import Header from "home/Header";
import PageRoutes from "./routes";
import "remixicon/fonts/remixicon.css";
import "./index.scss";

const Footer = lazy(() => import("home/Footer"));

const App = () => (
  <>
    <Header title={`Goku San`} />
    <main className="mt-10 text-3xl mx-auto max-w-6xl">
      <PageRoutes />
    </main>
    <Suspense fallback={<div>Loading Footer</div>}>
      <ErrorBoundary fallback={`Something went wrong`}>
        <Footer content={`Goku San`} />
      </ErrorBoundary>
    </Suspense>
  </>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
