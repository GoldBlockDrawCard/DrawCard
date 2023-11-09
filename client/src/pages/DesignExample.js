import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DesignExample = () => {
  const [userName, setUserName] = useState("");
  const [userPosition, setPosition] = useState("");
  const [userAttach, setAttach] = useState("");
  const location = useLocation();
  const naviagte = useNavigate();

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
          디자인 미리보기
          <hr />
        </div>

        <div className="designContainer d-flex">
          <div className="col-1"></div>

          <div className="designImg col-5 d-flex">
            <div className="card">
              <img src={require(`assets/images/${location.state.img}.PNG`)} alt="이미지" />
              <div className="card_name">{userName}</div>
              <div className="card_position">{userPosition}</div>
              <div className="card_attach">{userAttach}</div>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="descContainer col-4">
            <Link to="/">
              <button className="catebtn col-3"> {location.state.category} </button>
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
                <div className="col-6">
                <Link to="/">
                  <button className="catebtn col-10"> 홈으로 </button>
                </Link>
                </div>

                <button className="catebtn col-5" onClick={() => naviagte(-1)}>뒤로가기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignExample;
