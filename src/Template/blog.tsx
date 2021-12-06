import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MostRecentBlogs from "../components/MostRecentBlogs";
import { Location } from "@reach/router";
import { navigate } from "gatsby";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
export default ({ pageContext }) => {
  const user = useSelector((state) => state.userReducer);
  const state = useSelector((state) => state.blogReducer);
  const [loader, setIsLoader] = useState(false);
  const { blogData } = pageContext;

  useEffect(() => {
    const value = blogData.title;
    if (user.name == "" && state.length >= 2 && state.indexOf(value) === -1) {
      return navigate("/blogs");
    } else {
      setIsLoader(false);
    }
    // console.log(state);
    // const url = location.pathname.replace(/%20/g, "");
    // console.log("Blog Page Render", location);
  }, []);
  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        <div className="my-5">
          <Container fluid className=" mt-5">
            <Row>
              <Col lg={8} md={8}>
                <img
                  style={{ height: "600px", width: "100%" }}
                  src={blogData.blogMedia.file.url}
                  alt="blogImage"
                />
                <h1 className={`${styles.blog_title} mt-3`}>
                  {blogData.title}
                </h1>
                <p className={styles.blog_desc}>
                  {documentToReactComponents(
                    JSON.parse(pageContext.blogData.blogDescription.raw)
                  )}{" "}
                </p>
                {/* Author Name */}
                <div className={`${styles.blog_author} mb-5`}>
                  <div>
                    <img
                      className={styles.blog_author_image}
                      src={
                        "https://cdn4.wpbeginner.com/wp-content/uploads/2010/02/guest-author.gif"
                      }
                      alt="profileOFAuthur"
                    />
                  </div>
                  <div className="ml-4">
                    <h1>{blogData.authorName}</h1>
                    <p>{blogData.authorDescritption}</p>
                  </div>
                </div>

                <div>
                  <h1>Leave Us A Comment </h1>
                  <div className={styles.blog_comment_form}>
                    <p>
                      <label>Name</label>
                      <input className={styles.blog_comment_input} />
                    </p>
                    <p>
                      <label>Email</label>
                      <input className={styles.blog_comment_input} />
                    </p>
                    <p>
                      <label>Message</label>
                      <textarea
                        cols={50}
                        rows={10}
                        className={styles.blog_comment_input}
                        //   type="textarea"
                      />
                    </p>
                    <Button variant="warning" className="btn-lg">
                      Post
                    </Button>
                  </div>
                </div>
              </Col>
              {/* Most Recent Blogs */}
              <Col lg={4} md={4}>
                <MostRecentBlogs name={blogData.title} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Layout>
  );
};
