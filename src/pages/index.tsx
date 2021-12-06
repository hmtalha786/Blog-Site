import React from "react";
import Header from "../components/Header";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default () => {
  return (
    <div className="page-Wrapper">
      <Header />
      <Footer />
    </div>
  );
};
