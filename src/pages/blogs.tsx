import React from "react";
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import { Provider } from "react-redux";
import store from "../store";
export default () => {
  return (
      <Layout>
        <Blogs />
      </Layout>
    // </Provider>
  );
};
