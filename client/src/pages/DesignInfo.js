import React, { useState } from "react";
import { Link } from "react-router-dom";
import artDC2 from "../assets/images/artDC2.PNG";

const DesignInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const showConfirmClaim = () => {
  //   setIsModalOpen(true);
  //   // 모달창 열려있을 때 스크롤 막기
  //   document.body.style.overflow = "hidden";
  // };

  const cancelConfirmClaim = () => {
    setIsModalOpen(false);
    // 모달창 닫혔을 때 스크롤 활성
    document.body.style.overflow = "unset";
  };

  const data = {
    name: "놀라운 명함",
    author: "Whee",
    desc: "캐릭터가 놀라는 이미지를 사용해서 만들어진 디자인입니다.\n캐릭터를 이용하여 자신의 이름을 부각시킬 수 있고 캐릭터를 통해\n자신의 개성을 드러낼 수 있는 명함 이미지입니다.",
    price: 0.08,
  };
  
  return (
    <div className="defaultContainer">
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

            <div className="cardContainer">
              <span className="cardName">{data.name}</span>

              <span className="cardAuthor">
                Made by{" "}
                <Link to="/MainpageProfile" className="text-light">
                  <span>{data.author}</span>
                </Link>
              </span>

              <div className="cardDesc">{data.desc}</div>

              <div className="priceContainer d-flex col-12 align-items-center">
                <div className="cardPrice col-6">{data.price}EH</div>
                <div className="cardBuy col-6">
                  <Link to="/designexample">
                    <button className="catebtn buybtn"> 미리보기 </button>
                  </Link>
                </div>
              </div>

              <div className="d-flex col-12 justify-content-center">
                <button className="catebtn examplebtn" onClick={openModal}>
                  구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={cancelConfirmClaim}>
          <div className="buyModal" onClick={(e)=>e.stopPropagation()}>
            <div className="modalTitle">디자인 구매</div>
            <div className="modalDesc">
              해당 디자인의 가격은{" "}
              <span className="text-danger">{data.price} EH</span> 입니다.
              <br />
              구매하시겠습니까?
            </div>
            <div className="col-12">
              <Link to="/designbuy">
                <button className="catebtn col-5">구매</button>
              </Link>
              <button className="catebtn col-5" onClick={closeModal}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesignInfo;
