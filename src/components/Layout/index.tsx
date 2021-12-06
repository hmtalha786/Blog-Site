import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default ({ children }) => {
  return (
    <>
      <div className="wrap">
        <Navbar data={false} />
        {children}
        <Footer />
      </div>
    </>
  );
};
