import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Example from "../assets/images/draw_card.png";
import Profile from "../assets/images/defualt.png";
import Change from "../assets/images/change.png";

const MainProfile = () => {
  const [category, setCategory] = useState("buy");

  return (
    <div className="profile">
      <Container>
        <hr />
        <div className="profileImg">
          <img
            src={Profile}
            alt="profile_default"
            width={"100%"}
            height={"350px"}
          />
          <div>
            Untitle0001
            <img className="profileDefault" src={Change} />
          </div>
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

          <button
            className="catebtn"
            onClick={() => {
              setCategory("addsell");
            }}
          >
            {" "}
            판매 등록 <span></span>
          </button>
        </div>

        {category === "buy" && (
          <>
            <div className="buy_profile">
              <Link to="/cardDetailmy" className="new_content">
                <img src={Example} alt="profile" />
              </Link>
            </div>
          </>
        )}

        {category === "sell" && (
          <>
            <div className="sellDprofile">
              <div>등록된 물품이 없습니다.</div>
              <button
                className="catebtn"
                onClick={() => {
                  setCategory("addsell");
                }}
              >
                {" "}
                판매 등록 <span></span>
              </button>
            </div>
          </>
        )}

        {category === "addsell" && (
          <>
            <div className="sellAprofile">
              <div>
                <div>디자인 이름 : </div>
                <input />
              </div>
              <div>
                <div>디자인 설명 : </div>
                <input />
              </div>
              <div>
                <div>디자인 카테고리 : </div>
                <input />
              </div>
              <div>
                <div>디자인 가격 : </div>
                <input />
              </div>
              <div className="sellAprofiledesc">
                * 판매 가격의 10%는 수수료로 사용됩니다.
              </div>
              <div>
                <div>디자인 첨부 : </div>
                <input />
              </div>
              <div>
                <button className="catebtn">등록</button>
                <button
                  className="catebtn"
                  onClick={() => {
                    setCategory("buy");
                  }}
                >
                  취소
                </button>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MainProfile;
