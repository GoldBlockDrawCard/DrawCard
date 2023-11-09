import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DesignInfo = () => {
  const location = useLocation();
  const naviagte = useNavigate();

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
            <img
              src={require(`assets/images/${location.state.img}.PNG`)}
              alt="이미지"
            />
          </div>

          <div className="col-1"></div>

          <div className="descContainer col-4">
            <Link to="/">
              <button className="catebtn col-3">
                {location.state.category}
              </button>
            </Link>

            <div className="cardContainer">
              <span className="cardName">{location.state.name}</span>

              <span className="cardAuthor">
                Made by{" "}
                <Link to="/MainpageProfile" className="text-light">
                  <span>{location.state.designer}</span>
                </Link>
              </span>

              <div className="cardDesc">{location.state.desc}</div>

              {location.state.sale ? (
                <>
                  <div className="priceContainer d-flex col-12 align-items-center">
                    <div className="cardPrice col-6">
                      {location.state.price}EH
                    </div>
                    <div className="cardBuy col-6">
                      <div
                        onClick={() =>
                          naviagte(
                            `/designinfo/idx=${location.state.idx}/preview`,
                            {
                              state: {
                                category: location.state.category,
                                img: location.state.img,
                              },
                            }
                          )
                        }
                      >
                        <button className="catebtn buybtn"> 미리보기 </button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 justify-content-center">
                    <button
                      className="catebtn examplebtn"
                      onClick={() =>
                        naviagte(`/designbuy/idx=${location.state.idx}`, {
                          state: {
                            category: location.state.category,
                            img: location.state.img,
                            price: location.state.price,
                          },
                        })
                      }
                    >
                      구매
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="priceContainer d-flex col-12 align-items-center">
                    <div className="cardPrice col-6">
                      {location.state.price}EH
                    </div>
                    <div className="cardBuy col-6">
                      <button className="catebtn buybtn"> 미리보기 </button>
                    </div>
                  </div>

                  <div className="d-flex col-12 justify-content-center">
                    <button className="catebtn examplebtn">판매 완료</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignInfo;
