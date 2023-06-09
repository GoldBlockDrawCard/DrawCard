import './Main.css'
import Example from '../component/img/artDC1.png'
import Example2 from '../component/img/artDC2.PNG'
import Example3 from '../component/img/normalDC1.PNG'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Author1 from '../component/img/author1.PNG';
import Author2 from '../component/img/author2.PNG';
import DrawCard from '../component/DrawCard';

// 메인 페이지 작성자 이금철
const Main = () => {
    const [category, setCategory] = useState("ALL");

    return (
        <div className="mainpage">
            {/* 카테고리 영역 */}
            <div className='cate'>
                <button className="catebtn" onClick={()=>{
                    setCategory("ALL")
            }}> ALL <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("BEST")
            }}> BEST <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("NORMAL")
            }}> NORMAL <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("ART")
            }}> ART <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("EFFECT")
            }}> EFFECT <span></span></button>
            </div>
            
            {category === "ALL" && <>
            {/* 작가 프로필 홍보 영역 */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                
                <SwiperSlide>
                <div className='main_profile'>
                    <Link to="/mainprofile" className='main_content'>
                    <img className='main_profileImg' src={Author1} alt='main1'/>
                    <div className="main_profile_title">Whee</div>
                    <div>
                        <div className="main_sub_title">
                            이 달의 추천 작가
                        </div>
                        <div className="main_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25" width="25">
                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                            </svg>
                        </div>
                    </div>
                    </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='main_profile'>
                    <Link to="/mainprofile" className='main_content'>
                    <img className='main_profileImg' src={Author2} alt='main2'/>
                    <div className="main_profile_title">StrawberryMoon</div>
                    <div>
                        <div className="main_sub_title">
                            이 달의 추천 작가
                        </div>
                        <div className="main_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25" width="25">
                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                            </svg>
                        </div>
                    </div>
                    </Link>
                </div>
                </SwiperSlide>
            </Swiper>

            <div>
                <div className='subtitle'>최근 등록된 디자인</div>
                {/* 최신 업로드 프로필 영역 */}
                <div className='new_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Example} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <div className='new_content'>
                        <img src={Example2} alt='profile'/>
                        <DrawCard/>
                    </div>
                    <div className='new_content'>
                        <img src={Example3} alt='profile'/>
                        <DrawCard/>
                    </div>
                </div>

                <div className='subtitle'>작가 디자인</div>
                {/* 작가 이름 및 업로드 프로필 영역 */}
                <div className='author_profile1'>
                    <div className='author_content1'></div>
                    <div className='author_content1'></div>
                    <div className='author_content1'></div>
                </div>

                <div className='subtitle'>작가 디자인</div>
                {/* 작가 이름 및 업로드 프로필 영역 */}
                <div className='author_profile2'>
                    <div className='author_content2'></div>
                    <div className='author_content2'></div>
                    <div className='author_content2'></div>
                </div>
            </div>
            </>}

            {category === "BEST" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "NORMAL" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "ART" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "EFFECT" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}
        </div>
    );
}

export default Main;