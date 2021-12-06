import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ height: "60%", width: "100%" }}
      >
        <Loader
          className="d-flex justify-content-center align-items-center text-center"
          type="Oval"
          color="#ffba42"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }
}
