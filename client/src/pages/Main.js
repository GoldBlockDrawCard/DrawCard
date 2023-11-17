import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { ReactComponent as RightArrow } from "../assets/svg/rightarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

const Main = () => {
  const [category, setCategory] = useState("");
  const [cardDB, setCardDB] = useState([]);
  const [userDB, setUserDB] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/cards`)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    const initCardData = res.map((card) => {
      return {
        id: card._id,
        category: card.cardCate,
        userWallet: card.wallet,
        designer: card.regiName,
        designeName: card.cardName,
        designDesc: card.cardDesc,
        price: card.cardPrice,
        img: card.cardImg,
        sale: card.cardSale,
      };
    });

    setCardDB(initCardData);
  };

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
    getData();
    getUserData();
  }, []);

  return (
    <div className="defaultContainer">
      <div className="container">
        {/* 카테고리 영역 */}
        <div className="main-cate">
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("ALL");
              navigate(`/#category=all`);
            }}
          >
            <span>ALL</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("BEST");
              navigate(`/#category=best`);
            }}
          >
            <span>BEST</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("NORMAL");
              navigate(`/#category=normal`);
            }}
          >
            <span>NORMAL</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("ART");
              navigate(`/#category=art`);
            }}
          >
            <span>ART</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("EFFECT");
              navigate(`/#category=effect`);
            }}
          >
            <span>EFFECT</span>
          </button>
        </div>

        {category === "" && (
          <>
            {/* 작가 프로필 홍보 영역 */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              rewind={true}
              navigation
              slidesPerView={1}
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
            >
              {userDB.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="main_profile">
                    <div
                      className="main_content"
                      onClick={() => {
                        navigate(`/desingerprofile/idx=${data.id}`, {
                          state: {
                            id: data.id,
                            img: data.img,
                            designer: data.designer,
                            wallet: data.userWallet,
                          },
                        });
                      }}
                    >
                      <img
                        className="main_profileImg"
                        src={require(`assets/images/${data.img}.PNG`)}
                        alt="main1"
                      />
                      <div className="main_profile_title">{data.designer}</div>
                      <div className="main_sub_title">이 달의 추천 작가</div>
                      <div className="main_arrow">
                        <RightArrow />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div>
              <div className="subtitle">최신 업데이트</div>
              {/* 최신 업로드 프로필 영역 */}
              <Swiper
                modules={[Navigation, Pagination]}
                rewind={true}
                navigation
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {cardDB
                  .filter((card) => card.sale === true)
                  .map((card) => (
                    <SwiperSlide key={card.id}>
                      <div
                        className="new_content"
                        onClick={() => {
                          navigate(`/designinfo/idx=${card.id}`, {
                            state: {
                              id: card.id,
                              category: card.category,
                              name: card.designeName,
                              designer: card.designer,
                              desc: card.designDesc,
                              price: card.price,
                              img: card.img,
                              sale: card.sale,
                              wallet: card.userWallet,
                            },
                          });
                        }}
                      >
                        <img
                          src={require(`assets/images/${card.img}.PNG`)}
                          alt="profile"
                        />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="subtitle">Whee 작가</div>
              {/* 작가 이름 및 업로드 프로필 영역 */}
              <Swiper
                modules={[Navigation, Pagination]}
                rewind={true}
                navigation
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {cardDB
                  .filter((card) => card.designer === "Whee")
                  .map((card) => (
                    <SwiperSlide key={card.id}>
                      <div
                        className="new_content"
                        onClick={() => {
                          navigate(`/designinfo/idx=${card.id}`, {
                            state: {
                              id: card.id,
                              category: card.category,
                              name: card.designeName,
                              designer: card.designer,
                              desc: card.designDesc,
                              price: card.price,
                              img: card.img,
                              sale: card.sale,
                              wallet: card.userWallet,
                            },
                          });
                        }}
                      >
                        <img
                          src={require(`assets/images/${card.img}.PNG`)}
                          alt="profile"
                        />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="subtitle">StrawberryMoon 작가</div>
              {/* 작가 이름 및 업로드 프로필 영역 */}
              <Swiper
                modules={[Navigation, Pagination]}
                rewind={true}
                navigation
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {cardDB
                  .filter((card) => card.designer === "StrawberryMoon")
                  .map((card) => (
                    <SwiperSlide key={card.id}>
                      <div
                        className="new_content"
                        onClick={() => {
                          navigate(`/designinfo/idx=${card.id}`, {
                            state: {
                              id: card.id,
                              category: card.category,
                              name: card.designeName,
                              designer: card.designer,
                              desc: card.designDesc,
                              price: card.price,
                              img: card.img,
                              sale: card.sale,
                              wallet: card.userWallet,
                            },
                          });
                        }}
                      >
                        <img
                          src={require(`assets/images/${card.img}.PNG`)}
                          alt="profile"
                        />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </>
        )}

        {category === "ALL" && (
          <div className="cateCard">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.map((card) => (
              <div
                className="new_content"
                key={card.id}
                onClick={() => {
                  navigate(`/designinfo/idx=${card.id}`, {
                    state: {
                      id: card.id,
                      category: card.category,
                      name: card.designeName,
                      designer: card.designer,
                      desc: card.designDesc,
                      price: card.price,
                      img: card.img,
                      sale: card.sale,
                      wallet: card.userWallet,
                    },
                  });
                }}
              >
                <img
                  src={require(`assets/images/${card.img}.PNG`)}
                  alt="profile"
                />
                <p className="cardtitle">
                  NickName<span>Job</span>
                  <span>Company</span>
                </p>
              </div>
            ))}
          </div>
        )}

        {category === "BEST" && (
          <div className="cateCard">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "BEST") == "" ? (
              <div>
                <p>현재 BEST 카테고리에 등록된 상품이 없습니다.</p>
              </div>
            ) : (
              cardDB
                .filter((card) => card.category === "BEST")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.id}`, {
                        state: {
                          id: card.id,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.sale,
                          wallet: card.userWallet,
                        },
                      });
                    }}
                  >
                    <img
                      src={require(`assets/images/${card.img}.PNG`)}
                      alt="profile"
                    />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </div>
                ))
            )}
          </div>
        )}

        {category === "NORMAL" && (
          <div className="cateCard">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "NORMAL") == "" ? (
              <div>
                <p>현재 NORMAL 카테고리에 등록된 상품이 없습니다.</p>
              </div>
            ) : (
              cardDB
                .filter((card) => card.category === "NORMAL")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.id}`, {
                        state: {
                          id: card.id,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.sale,
                          wallet: card.userWallet,
                        },
                      });
                    }}
                  >
                    <img
                      src={require(`assets/images/${card.img}.PNG`)}
                      alt="profile"
                    />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </div>
                ))
            )}
          </div>
        )}

        {category === "ART" && (
          <div className="cateCard">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "ART") == "" ? (
              <div>
                <p>현재 ART 카테고리에 등록된 상품이 없습니다.</p>
              </div>
            ) : (
              cardDB
                .filter((card) => card.category === "ART")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.id}`, {
                        state: {
                          id: card.id,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.sale,
                          wallet: card.userWallet,
                        },
                      });
                    }}
                  >
                    <img
                      src={require(`assets/images/${card.img}.PNG`)}
                      alt="profile"
                    />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </div>
                ))
            )}
          </div>
        )}

        {category === "EFFECT" && (
          <div className="cateCard">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "EFFECT") == "" ? (
              <div>
                <p>현재 EFFECT 카테고리에 등록된 상품이 없습니다.</p>
              </div>
            ) : (
              cardDB
                .filter((card) => card.category === "EFFECT")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.id}`, {
                        state: {
                          id: card.id,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.sale,
                          wallet: card.userWallet,
                        },
                      });
                    }}
                  >
                    <img
                      src={require(`assets/images/${card.img}.PNG`)}
                      alt="profile"
                    />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
