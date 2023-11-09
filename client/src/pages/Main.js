import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { ReactComponent as RightArrow } from "../assets/svg/rightarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import MenuCategory from "../components/MenuCategory";

const Main = () => {
  const [category, setCategory] = useState("ALL");
  // const { categoryID } = useParams();
  const [cardDB, setCardDB] = useState([]);
  const [userDB, setUserDB] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/cards`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    let count = 0;

    const initCardData = res.map((card) => {
      return {
        idx: count++,
        id: card._id,
        category: card.cardCate,
        userWallet: card.wallet,
        designer: card.regiName,
        designeName: card.cardName,
        designDesc: card.cardDesc,
        price: card.cardPrice,
        img: card.cardImg,
        sale: card.cardSale
      };
    });

    setCardDB(initCardData);
  };

  const getUserData = async () => {
    const res = await fetch(`http://localhost:4000/api/users`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    let count = 0;

    const initUserData = res.map((user) => {
      return {
        idx: count++,
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
            }}
          >
            <span>ALL</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("BEST");
            }}
          >
            <span>BEST</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("NORMAL");
            }}
          >
            <span>NORMAL</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("ART");
            }}
          >
            <span>ART</span>
          </button>
          <button
            className="catebtn col-1"
            onClick={() => {
              setCategory("EFFECT");
            }}
          >
            <span>EFFECT</span>
          </button>
          {/* <MenuCategory 
            categoryID={categoryID}
            data={category}
            /> */}
        </div>

        {category === "ALL" && (
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
                        navigate(`/desingerprofile/idx=${data.idx}`,{state: {
                          img: data.img,
                          designer: data.designer
                        }})
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
                        navigate(`/designinfo/idx=${card.idx}`, {
                          state: {
                            idx: card.idx,
                            category: card.category,
                            name: card.designeName,
                            designer: card.designer,
                            desc: card.designDesc,
                            price: card.price,
                            img: card.img,
                            sale: card.cardSale
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
                          navigate(`/designinfo/idx=${card.idx}`, {
                            state: {
                              idx: card.idx,
                              category: card.category,
                              name: card.designeName,
                              designer: card.designer,
                              desc: card.designDesc,
                              price: card.price,
                              img: card.img,
                              sale: card.sale
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
                          navigate(`/designinfo/idx=${card.idx}`, {
                            state: {
                              idx: card.idx,
                              category: card.category,
                              name: card.designeName,
                              designer: card.designer,
                              desc: card.designDesc,
                              price: card.price,
                              img: card.img,
                              sale: card.cardSale
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

        {category === "BEST" && (
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "BEST") == "" ? (
              <p>현재 BEST 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardDB
                .filter((card) => card.category === "BEST")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.idx}`, {
                        state: {
                          idx: card.idx,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.cardSale
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
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "NORMAL") == "" ? (
              <p>현재 NORMAL 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardDB
                .filter((card) => card.category === "NORMAL")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.idx}`, {
                        state: {
                          idx: card.idx,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.cardSale
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
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "ART") == "" ? (
              <p>현재 ART 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardDB
                .filter((card) => card.category === "ART")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.idx}`, {
                        state: {
                          idx: card.idx,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.cardSale
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
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardDB.filter((card) => card.category === "EFFECT") == "" ? (
              <p>현재 EFFECT 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardDB
                .filter((card) => card.category === "EFFECT")
                .map((card) => (
                  <div
                    className="new_content"
                    key={card.id}
                    onClick={() => {
                      navigate(`/designinfo/idx=${card.idx}`, {
                        state: {
                          idx: card.idx,
                          category: card.category,
                          name: card.designeName,
                          designer: card.designer,
                          desc: card.designDesc,
                          price: card.price,
                          img: card.img,
                          sale: card.cardSale
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
