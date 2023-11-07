import React from "react";
import { Container } from "react-bootstrap";
import Profile from "../assets/images/designer01.PNG";
import { useState } from "react";
import Example1 from "../assets/images/ex1.png";
import Example2 from "../assets/images/ex2.png";
import Example3 from "../assets/images/ex3.png";
import Art2 from "../assets/images/artDC2.PNG";
import Art3 from "../assets/images/artDC3.PNG";
import Art4 from "../assets/images/artDC4.PNG";
import { Link } from "react-router-dom";

const DesignerProfile = () => {
  const [category, setCategory] = useState("buy");

  return (
    <div className="defaultContainer">
      <Container>
        <hr />
        <div className="profileImg">
          <img src={Profile} alt="profile" width={"100%"} />
          <div>Whee</div>
        </div>
        <hr />

        <div className="menu-buttons">
          <button
            className="catebtn"
            onClick={() => {
              setCategory("buy");
            }}
          >
            {" "}
            구매 목록 <span></span>
          </button>

          <button
            className="catebtn"
            onClick={() => {
              setCategory("sell");
            }}
          >
            {" "}
            판매 목록 <span></span>
          </button>
        </div>

        {category === "buy" && (
          <>
            <div className="buy_profile">
              <Link to="/cardDetail" className="new_content">
                <img src={Example1} alt="profile" />
              </Link>
              <Link to="/cardDetail" className="new_content">
                <img src={Example2} alt="profile" />
              </Link>
              <Link to="/cardDetail" className="new_content">
                <img src={Example3} alt="profile" />
              </Link>
            </div>
          </>
        )}

        {category === "sell" && (
          <>
            <div className="sell_profile">
              <Link to="/cardDetail" className="new_content">
                <img src={Art2} alt="profile" />
              </Link>
              <Link to="/cardDetail" className="new_content">
                <img src={Art3} alt="profile" />
              </Link>
              <Link to="/cardDetail" className="new_content">
                <img src={Art4} alt="profile" />
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default DesignerProfile;
