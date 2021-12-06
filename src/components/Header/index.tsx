import React from "react";
import Navbar from "../../components/Navbar";
import style from "./header.module.css";
import { FaArrowDown } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { navigate } from "gatsby";

const index = () => {
  return (
    <>
      <div className={style.header_wrapper} id="header">
        <div className="container pt-4">
          <Navbar data={true} />
        </div>
        <div className={style.header_content}>
          <p>Hello! Welcome to</p>
          <p className={style.header_title}>Blogit.</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis  
          assumenda aliquid adipisci ex nisi rerum delectus commodi quisquam cum
          quam iste quas odio quibusdam obcaecati quidem excepturi tenetur
          molestiae autem amet sequi quaerat eligendi, possimus repellat
          explicabo? Delectus, culpa repellendus?
          <div className={style.down_button_wrapper}>
            <Scrollspy items={["blogs"]} currentClassName="header">
              <FaArrowDown
                className={style.down_button}
                size="40"
                onClick={() => navigate("/blogs")}
              />
            </Scrollspy>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
