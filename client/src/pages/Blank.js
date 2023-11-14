import React from "react";
import { Link } from "react-router-dom";

const Blank = () => {
  return (
    <div className="defaultContainer">
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center m-5">
          <div className="blankTitle">해당 페이지는 없는 페이지입니다.</div>
          <Link to="/">
            <button className="catebtn"> 홈으로 </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blank;
