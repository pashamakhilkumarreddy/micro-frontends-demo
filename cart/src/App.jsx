import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import Cart from "./components/Cart";
import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <>
    {/* <Header title="Cart" /> */}
    <main className="my-10 mx-auto max-w-6xl">
      <Cart />
    </main>
    <Footer content="Cart" />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
