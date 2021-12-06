import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./blog.module.css";
const readingTime = require("reading-time");

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import { addBlogView } from "../../Reducers/blogReducer";
import AuthModal from "../AuthModal";
const index = ({ blog }) => {
  const desc = documentToReactComponents(JSON.parse(blog.blogDescription.raw));
  const stats = readingTime(desc);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogReducer);
  const user = useSelector((state) => state.userReducer);
  const [showModal, setShowModal] = useState(false);

  
  const viewBlog = () => {
    if (user.name == "" && state.length >= 2 && !state.includes(blog.title)) {
      return setShowModal(true);
    }
    navigate(`/blogs/${blog.title}`);
    dispatch(addBlogView(blog.title));
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} className={style.hoverImage}>
            <img
              className={style.card_blog_image}
              src={blog.blogMedia.file.url}
              alt="blogImage"
              onClick={viewBlog}
            />
          </Col>
          <Col lg={4} md={4} sm={12} onClick={viewBlog}>
            <p className={style.blog_title}>{blog.title}</p>{" "}
            <p className={style.blog_date}>
              {blog.blogMedia.updatedAt} | {stats.text}
            </p>
          </Col>
        </Row>
      </Container>
      {showModal ? <AuthModal reset={setShowModal} /> : ""}
    </div>
  );
};

export default index;
