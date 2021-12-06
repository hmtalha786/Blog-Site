import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
// import { auth, googleLoginFun, provider } from "../../Config";
import firebase from "gatsby-plugin-firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Reducers/userReducer";
const index = ({ reset }) => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClose = () => {
    reset(false);
    setShow(false);
  };
  interface FBTYPE {
    name: "";
    email: "";
    first_name: "";
    granted_scopes: any;
    id: "";
    last_name: "";
    picture: {
      data: any;
    };
  }
  interface OBJ {
    email: "";
    name: "";
  }
  useEffect(() => {
    console.log("state modal", state);
  }, [state]);
  const handleShow = () => setShow(true);
  const Facebooklogin = async () => {
    try {
      var provider = new firebase.auth.FacebookAuthProvider();
      const data = await firebase.auth().signInWithPopup(provider);
      const userData: any = await data.additionalUserInfo.profile;
      console.log(userData);

      let obj: OBJ = {
        name: userData.name,
        email: userData.email,
      };
      dispatch(addUser(obj));
    } catch (err) {
      console.log("err From Firebase===>", err);
    }

    // try {
    //   const facebookProvider: any = await new firebase.auth.FacebookAuthProvider();
    //   // const result = await new firebase.auth.FacebookAuthProvider();
    //   const data: any = await firebase.auth.signInWithPopup(facebookProvider);

    //   console.log("result Facebook", data);
    // } catch (err) {
    //   console.log(err.message);
    // }
    // const data = await auth.signInWithPopup(facebookProvider);
    // const userData: any = await data.additionalUserInfo.profile;
    // console.log("FaceBook TYpe===>", userData);
    // let obj: OBJ = {
    //   name: userData.name,
    //   email: userData.email,
    // };

    // console.log(obj);
    // dispatch(addUser(obj));
    handleClose();
  };
  const googleLogin = async () => {
    console.log("Sign In Clicked");
    try {
      var provider = new firebase.auth.GoogleAuthProvider();

      const data = await firebase.auth().signInWithPopup(provider);
      const userData: any = await data.additionalUserInfo.profile;
      console.log(userData);

      let obj: OBJ = {
        name: userData.name,
        email: userData.email,
      };
      dispatch(addUser(obj));
    } catch (err) {
      console.log("err From Firebase===>", err);
    }
    // firebase.auth.GoogleAuthProvider();
    // const data = await googleLoginFun();
    // // dispatch(addUser(data));
    // console.log(data)
    // alert("Goole Logged IN")

    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="p-5 text-center">
            <button className="btn btn-primary m-3" onClick={Facebooklogin}>
              Facebook Login
            </button>
            <button className="btn btn-danger m-3" onClick={googleLogin}>
              Google Login
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default index;
