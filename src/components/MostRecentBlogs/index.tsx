import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogView } from "../../Reducers/blogReducer";
import AuthModal from "../AuthModal";
const index = ({ name }) => {
  const [mostRecent, setMostRecent] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const state = useSelector((state) => state.blogReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const recent = useStaticQuery(graphql`
    query MyQuery {
      allContentfulGatsbyBlogs(limit: 3) {
        nodes {
          title
          blogMedia {
            file {
              url
            }
            updatedAt
          }
        }
      }
    }
  `);
  useEffect(() => {
    const filterd = recent.allContentfulGatsbyBlogs.nodes.filter(
      (blog) => blog.title !== name
    );
    setMostRecent(filterd);

    // setBlogs(recent);
  }, []);
  const viewBlog = (title) => {
    if (user.name == "" && state.length >= 2 && !state.includes(title)) {
      return setShowModal(true);
    }
    navigate(`/blogs/${title}`);
    dispatch(addBlogView(title));
  };
  return (
    <div>
      <h1>Most Recent Blogs</h1>
      {mostRecent &&
        mostRecent.map((blog) => {
          return (
            <div className="mt-4">
              <div className={"d-flex"}>
                <div>
                  <img
                    style={{ height: "80px", width: "100px" }}
                    src={blog.blogMedia.file.url}
                    alt="blogImage"
                    className="hoverme"
                    onClick={() => viewBlog(blog.title)}
                  />
                </div>
                <div className="ml-1">
                  <p
                    className="font-weight-bold hoverme"
                    onClick={() => viewBlog(blog.title)}
                  >
                    {blog.title}
                  </p>
                  <p style={{ display: "block" }}>{blog.blogMedia.updatedAt}</p>
                </div>
                <br />
              </div>
            </div>
          );
        })}
      {showModal ? <AuthModal reset={setShowModal} /> : ""}
    </div>
  );
};

export default index;
