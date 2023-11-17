import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DesignInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userDB, setUserDB] = useState([]);

  const getUserData = async () => {
    const res = await fetch(`http://localhost:4000/api/users`)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    const initUserData = res.map((user) => {
      return {
        id: user._id,
        userWallet: user.wallet,
        designer: user.regiName,
        img: user.profileImg,
      };
    });

    setUserDB(initUserData);
  };

  useEffect(() => {
    getUserData();
  }, []);

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

              <span className="cardAuthor d-flex">
                Made by{" "}                
                {userDB.filter((data) => data.userWallet === location.state.wallet)
                  .map((data) => (
                    <span
                    className="text-light"
                    key={data.id}
                    onClick={() => {
                      navigate(`/desingerprofile/idx=${data.id}`, {
                        state: {
                          id: data.id,
                          img: data.img,
                          designer: data.designer,
                          wallet: data.userWallet
                        },
                      });
                    }}
                  >
                    <span className="designerName">{data.designer}</span>
                  </span>
                  ))
                }

              </span>

              <div className="cardDesc">{location.state.desc}</div>

              {location.state.sale === true ? (
                <>
                  <div className="priceContainer d-flex col-12 align-items-center">
                    <div className="cardPrice col-6">
                      {location.state.price}EH
                    </div>
                    <div className="cardBuy col-6">
                      <div
                        onClick={() =>
                          navigate(
                            `/designinfo/idx=${location.state.id}/preview`,
                            {
                              state: {
                                id:location.state.id,
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
                        navigate(`/designbuy/idx=${location.state.id}`, {
                          state: {
                            id:location.state.id,
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
                      <div className="disabledbtn buybtn"> 미리보기 </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 justify-content-center">
                    <div className="disabledbtn examplebtn">판매 완료</div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-1"></div>

        </div>
      </div>
    </div>
  );
};

export default DesignInfo;
