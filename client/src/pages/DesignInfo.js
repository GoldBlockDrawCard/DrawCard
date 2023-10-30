import React from "react";
import { Link } from "react-router-dom";
import artDC2 from "../assets/images/artDC2.PNG";

function DesignInfo() {
  return (
    <div className="designinfoContainer defaultContainer">
      <div className="container">
        <div className="designTitle">
          디자인 정보
          <hr />
        </div>

        <div className="designContainer d-flex">
          <div className="col-1"></div>

          <div className="designImg col-5 d-flex">
            <img src={artDC2} alt="이미지" />
          </div>

          <div className="col-1"></div>

          <div className="descContainer col-4">
            <Link to="/">
              <button className="catebtn col-3"> ART </button>
            </Link>

            <div className="detailSub">
              <div className="detailName">놀라운 명함</div>
              <div className="detailAuthor">
                Made by{" "}
                <Link to="/MainpageProfile">
                  <span>Whee</span>
                </Link>
              </div>

              <div className="detailDes">
                캐릭터가 놀라는 이미지를 사용해서 만들어진 디자인입니다.
                캐릭터를 이용하여 자신의 이름을 부각시킬 수 있고 캐릭터를 통해
                자신의 개성을 드러낼 수 있는 명함 이미지입니다.
              </div>

              <div className="detailBuy">
                <div className="detailPrice">
                  0.08EH&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <Link to="/CardBuy">
                  <button className="catebtn"> 구매 </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignInfo;
