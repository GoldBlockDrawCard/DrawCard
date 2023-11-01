import Art1 from "../assets/images/artDC1.png";
import Art2 from "../assets/images/artDC2.PNG";
import Art3 from "../assets/images/artDC3.PNG";
import Art4 from "../assets/images/artDC4.PNG";
import Normal1 from "../assets/images/normalDC1.PNG";
import Normal2 from "../assets/images/normalDC2.PNG";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Author1 from "../assets/images/author1.PNG";
import Author2 from "../assets/images/author2.PNG";
import { ReactComponent as RightArrow } from "../assets/svg/rightarrow.svg";

const Main = () => {
  const [category, setCategory] = useState("ALL");

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
            <Swiper spaceBetween={50} slidesPerView={2}>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainpageprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author1}
                      alt="main1"
                    />
                    <div className="main_profile_title">Whee</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author2}
                      alt="main2"
                    />
                    <div className="main_profile_title">StrawberryMoon</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainpageprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author1}
                      alt="main1"
                    />
                    <div className="main_profile_title">Whee</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author2}
                      alt="main2"
                    />
                    <div className="main_profile_title">StrawberryMoon</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainpageprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author1}
                      alt="main1"
                    />
                    <div className="main_profile_title">Whee</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_profile">
                  <Link to="/mainprofile" className="main_content">
                    <img
                      className="main_profileImg"
                      src={Author2}
                      alt="main2"
                    />
                    <div className="main_profile_title">StrawberryMoon</div>
                    <div className="main_sub_title">이 달의 추천 작가</div>
                    <div className="main_arrow">
                      <RightArrow />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div>
              <div className="subtitle">최신 업데이트</div>
              {/* 최신 업로드 프로필 영역 */}
              <div className="new_profile">
                <Link to="/designinfo" className="new_content">
                  <img src={Art2} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Art2} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Normal1} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
              </div>

              <div className="subtitle">Whee 작가</div>
              {/* 작가 이름 및 업로드 프로필 영역 */}
              <div className="author_profile1">
                <Link to="/designinfo" className="new_content">
                  <img src={Art2} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Art3} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Art4} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
              </div>

              <div className="subtitle">StrawberryMoon 작가</div>
              {/* 작가 이름 및 업로드 프로필 영역 */}
              <div className="author_profile2">
                <Link to="/designinfo" className="new_content">
                  <img src={Art1} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Normal1} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
                <Link to="/designinfo" className="new_content">
                  <img src={Normal2} alt="profile" />
                  <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
                </Link>
              </div>
            </div>
          </>
        )}

        {category === "BEST" && (
          <>
            {/* 많이 팔린 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art3} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art4} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>
          </>
        )}

        {category === "NORMAL" && (
          <>
            {/* 작가 프로필 홍보 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Normal2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>
          </>
        )}

        {category === "ART" && (
          <>
            {/* 작가 프로필 홍보 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art3} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art4} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art3} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art4} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art3} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art4} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>
          </>
        )}

        {category === "EFFECT" && (
          <>
            {/* 작가 프로필 홍보 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className="cate_profile">
              <Link to="/designinfo" className="new_content">
                <img src={Art1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Art2} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
              <Link to="/designinfo" className="new_content">
                <img src={Normal1} alt="profile" />
                <p className="cardtitle">NickName<span>Job</span><span>Company</span></p>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
