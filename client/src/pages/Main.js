import './Main.css'
import Art1 from '../component/img/artDC1.png'
import Art2 from '../component/img/artDC2.PNG'
import Art3 from '../component/img/artDC3.PNG'
import Art4 from '../component/img/artDC4.PNG'
import Normal1 from '../component/img/normalDC1.PNG'
import Normal2 from '../component/img/normalDC2.PNG'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Author1 from '../component/img/author1.PNG';
import Author2 from '../component/img/author2.PNG';
import DrawCard from '../component/DrawCard';
import MainCard from '../component/MainCard';


// 메인 페이지 작성자 이금철
const Main = () => {
    const [category, setCategory] = useState("ALL");
    const test = useNavigate();

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
                    <Link to="/mainpageprofile" className='main_content'>
                    <img className='main_profileImg' src={Author1} alt='main1'/>
                    <div className="main_profile_title">Whee</div>
                    <MainCard/>
                    </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='main_profile'>
                    <Link to="/mainprofile" className='main_content'>
                    <img className='main_profileImg' src={Author2} alt='main2'/>
                    <div className="main_profile_title">StrawberryMoon</div>
                    <MainCard/>
                    </Link>
                </div>
                </SwiperSlide>
            </Swiper>

            <div>
                <div className='subtitle'>최신 업데이트</div>
                {/* 최신 업로드 프로필 영역 */}
                <div className='new_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

                <div className='subtitle'>Whee 작가</div>
                {/* 작가 이름 및 업로드 프로필 영역 */}
                <div className='author_profile1'>
                <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

                <div className='subtitle'>StrawberryMoon 작가</div>
                {/* 작가 이름 및 업로드 프로필 영역 */}
                <div className='author_profile2'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>
            </div>
            </>}

            {category === "BEST" && <>
            {/* 많이 팔린 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
            </div>

            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal2} alt='profile'/>
                        <DrawCard/>
                    </Link>
            </div>
            </>}

            {category === "NORMAL" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>
            </>}

            {category === "ART" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>
            </>}

            {category === "EFFECT" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='cate_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                        <DrawCard/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Normal1} alt='profile'/>
                        <DrawCard/>
                    </Link>
                </div>
            </>}
        </div>
    );
}

export default Main;