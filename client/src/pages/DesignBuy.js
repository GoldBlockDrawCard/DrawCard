import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const DesignBuy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPosition, setPosition] = useState("");
  const [userAttach, setAttach] = useState("");
  const naviagte = useNavigate();
  const location = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cancelConfirmClaim = () => {
    setIsModalOpen(false);
    // 모달창 닫혔을 때 스크롤 활성
    document.body.style.overflow = "unset";
  };

  const nickHandler = (e) => {
    setUserName(e.target.value);
  };
  const positionHandler = (e) => {
    setPosition(e.target.value);
  };
  const attacHandler = (e) => {
    setAttach(e.target.value);
  };

  return (
    <div className="defaultContainer">
      <div className="container">
        <div className="designTitle">
          디자인 구매 및 정보 입력
          <hr />
        </div>

        <div className="designContainer d-flex">
          <div className="col-1"></div>

          <div className="designImg col-5 d-flex">
            <div className="card">
              <img
                src={require(`assets/images/${location.state.img}.PNG`)}
                alt="이미지"
              />
              <div className="card_name">{userName}</div>
              <div className="card_position">{userPosition}</div>
              <div className="card_attach">{userAttach}</div>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="descContainer col-4">
            <Link to="/">
              <button className="catebtn col-3">
                {" "}
                {location.state.category}{" "}
              </button>
            </Link>

            <div className="cardContainer">
              <div className="cardName">정보 입력</div>

              <form className="inputForm">
                <div className="col-12 d-flex justify-content-center">
                  <div className="col-3">닉네임</div>
                  <div className="col-1">:</div>
                  <input
                    type="text"
                    className="nickname col-6"
                    value={userName}
                    onChange={nickHandler}
                  ></input>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="col-3">직책</div>
                  <div className="col-1">:</div>
                  <input
                    type="text"
                    className="position col-6"
                    value={userPosition}
                    onChange={positionHandler}
                  ></input>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="col-3">소속</div>
                  <div className="col-1">:</div>
                  <input
                    type="text"
                    className="attach col-6"
                    value={userAttach}
                    onChange={attacHandler}
                  ></input>
                </div>
              </form>

              <div className="btnContainer d-flex col-12 align-items-center">
                <div className="cardPrice col-6">{location.state.price}EH</div>

                <button className="catebtn buybtn" onClick={() => naviagte(-1)}>
                  뒤로가기
                </button>
              </div>

              <div className="d-flex col-12 justify-content-center">
                <button className="catebtn examplebtn" onClick={openModal}>
                  구매
                </button>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={cancelConfirmClaim}>
          <div className="buyModal" onClick={(e) => e.stopPropagation()}>
            <div className="modalTitle">디자인 구매</div>
            <div className="modalDesc">
              해당 디자인의 가격은{" "}
              <span className="text-danger">{location.state.price} EH</span>{" "}
              입니다.
              <br />
              구매 후 입력한 정보를 변경할 수 없습니다.
              <br />
              구매하시겠습니까?
            </div>
            <div className="col-12">
              <Link to="/mainprofile">
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
};

export default DesignBuy;
