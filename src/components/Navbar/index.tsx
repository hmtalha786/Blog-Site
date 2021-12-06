import { navigate } from "gatsby";
import React, { useState, useEffect } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import style from "./navbar.module.css";
import { FaUser } from "react-icons/fa";
// import AuthModal from "../AuthModal";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../Reducers/userReducer";
import { removeBlogs } from "../../Reducers/blogReducer";
import AuthModal from "../AuthModal";
const index = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<any>({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const state1 = useSelector((state) => state);
  useEffect(() => {
    setUser(state);
    return () => {
      setUser({}); // This worked for me
    };
  }, [state]);
  const logout = () => {
    dispatch(removeUser(null));
    dispatch(removeBlogs());

    console.log(state1);
  };
  return (
    <div>
      {showModal && showModal ? <AuthModal reset={setShowModal} /> : null}
      <nav
        className={
          data
            ? "navbar navbar-expand-lg navbar-light bg-transparent"
            : "navbar navbar-expand-lg navbar-light bg-dark"
        }
      >
        <a className="navbar-brand font-weight-bold" href="#"onClick={()=>navigate("/")}>
          <span className={`${style.nav_logo} ${style.nav_blog}`}>Blog</span>
          <span className={`${style.nav_logo} ${style.nav_it}`}>it</span>
        </a>
        <button
          className="navbar-toggler white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon white "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => navigate("/")}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => navigate("/blogs/")}
              >
                Blogs
              </a>
            </li>

            <li className="nav-item">
              {user && user?.name !== "" ? (
                <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    <FaUser size={25} />
                    {user.name}{" "}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <li className="nav-item a">
                  <a
                    className="nav-link hoverme"
                    onClick={() => setShowModal(true)}
                  >
                    Sign In{" "}
                  </a>
                </li>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default index;
