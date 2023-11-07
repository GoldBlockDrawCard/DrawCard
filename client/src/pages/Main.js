import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as RightArrow } from "../assets/svg/rightarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

const Main = () => {
  const [category, setCategory] = useState("ALL");

  const cardData = [
    {
      _id: 0,
      wallet: "0x1234",
      regiName: "StrawberryMoon",
      cardName: "card",
      cardCate: "normal",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/normalDC1.PNG"),
    },
    {
      _id: 1,
      wallet: "0x1234",
      regiName: "StrawberryMoon",
      cardName: "card",
      cardCate: "normal",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/normalDC2.PNG"),
    },
    {
      _id: 2,
      wallet: "0x1234",
      regiName: "StrawberryMoon",
      cardName: "card",
      cardCate: "art",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/artDC1.png"),
    },
    {
      _id: 3,
      wallet: "0x1234",
      regiName: "Whee",
      cardName: "card",
      cardCate: "art",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/artDC2.PNG"),
    },
    {
      _id: 4,
      wallet: "0x1234",
      regiName: "Whee",
      cardName: "card",
      cardCate: "art",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/artDC3.PNG"),
    },
    {
      _id: 5,
      wallet: "0x1234",
      regiName: "Whee",
      cardName: "card",
      cardCate: "art",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/artDC4.PNG"),
    },
    {
      _id: 6,
      wallet: "0x1234",
      regiName: "author",
      cardName: "card",
      cardCate: "normal",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/normalDC1.PNG"),
    },
    {
      _id: 7,
      wallet: "0x1234",
      regiName: "author",
      cardName: "card",
      cardCate: "normal",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/normalDC1.PNG"),
    },
    {
      _id: 8,
      wallet: "0x1234",
      regiName: "author",
      cardName: "card",
      cardCate: "normal",
      cardDesc: "card desc",
      cardPrice: "10",
      cardImg: require("assets/images/normalDC1.PNG"),
    },
  ];

  const designerData = [
    {
      _id: 0,
      wallet: "0x1234",
      designerName: "Whee",
      backgroundImg: require("assets/images/designer01.PNG"),
    },
    {
      _id: 1,
      wallet: "0x1234",
      designerName: "StrawberryMoon",
      backgroundImg: require("assets/images/designer02.PNG"),
    },
    {
      _id: 2,
      wallet: "0x1234",
      designerName: "Cyber",
      backgroundImg: require("assets/images/designer03.jpg"),
    },
  ];

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
              {designerData.map((data) => (
                <SwiperSlide key={data._id}>
                  <div className="main_profile">
                    <Link to="/desingerprofile" className="main_content">
                      <img
                        className="main_profileImg"
                        src={data.backgroundImg}
                        alt="main1"
                      />
                      <div className="main_profile_title">{data.designerName}</div>
                      <div className="main_sub_title">이 달의 추천 작가</div>
                      <div className="main_arrow">
                        <RightArrow />
                      </div>
                    </Link>
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
                {cardData
                  .filter((card) => card._id >= cardData.length - 6)
                  .map((card) => (
                    <SwiperSlide>
                      <Link
                        to="/designinfo"
                        className="new_content"
                        key={card._id}
                      >
                        <img src={card.cardImg} alt="profile" />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </Link>
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
                {cardData
                  .filter((card) => card.regiName === "Whee")
                  .map((card) => (
                    <SwiperSlide>
                      <Link
                        to="/designinfo"
                        className="new_content"
                        key={card._id}
                      >
                        <img src={card.cardImg} alt="profile" />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </Link>
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
                {cardData
                  .filter((card) => card.regiName === "StrawberryMoon")
                  .map((card) => (
                    <SwiperSlide>
                      <Link
                        to="/designinfo"
                        className="new_content"
                        key={card._id}
                      >
                        <img src={card.cardImg} alt="profile" />
                        <p className="cardtitle">
                          NickName<span>Job</span>
                          <span>Company</span>
                        </p>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </>
        )}

        {category === "BEST" && (
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardData
              .filter((card) => card.cardCate === "best") == "" ? (
              <p>현재 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardData
                .filter((card) => card.cardCate === "best")
                .map((card) => (
                  <Link
                    to="/designinfo"
                    className="new_content col-3"
                    key={card._id}
                  >
                    <img src={card.cardImg} alt="profile" />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </Link>
                ))
            )}
          </div>
        )}

        {category === "NORMAL" && (
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardData.filter((card) => card.cardCate === "normal") == "" ? (
              <p>현재 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardData
                .filter((card) => card.cardCate === "normal")
                .map((card) => (
                  <Link
                    to="/designinfo"
                    className="new_content col-3"
                    key={card._id}
                  >
                    <img src={card.cardImg} alt="profile" />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </Link>
                ))
            )}
          </div>
        )}

        {category === "ART" && (
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardData.filter((card) => card.cardCate === "art") == "" ? (
              <p>현재 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardData
                .filter((card) => card.cardCate === "art")
                .map((card) => (
                  <Link
                    to="/designinfo"
                    className="new_content col-3"
                    key={card._id}
                  >
                    <img src={card.cardImg} alt="profile" />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </Link>
                ))
            )}
          </div>
        )}

        {category === "EFFECT" && (
          <div className="cate_profile">
            {/* 작가 프로필 홍보 영역 */}
            {cardData.filter((card) => card.cardCate === "effect") == "" ? (
              <p>현재 카테고리에 등록된 상품이 없습니다.</p>
            ) : (
              cardData
                .filter((card) => card.cardCate === "effect")
                .map((card) => (
                  <Link
                    to="/designinfo"
                    className="new_content col-3"
                    key={card._id}
                  >
                    <img src={card.cardImg} alt="profile" />
                    <p className="cardtitle">
                      NickName<span>Job</span>
                      <span>Company</span>
                    </p>
                  </Link>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
