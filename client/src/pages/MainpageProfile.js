import React from 'react'
import './MainpageProfile.css'
import { Container } from 'react-bootstrap'
import Profile from '../component/img/author1.PNG'
import { useState } from 'react';
import Example1 from '../component/img/ex1.png'
import Example2 from '../component/img/ex2.png'
import Example3 from '../component/img/ex3.png'
import Art2 from '../component/img/artDC2.PNG'
import Art3 from '../component/img/artDC3.PNG'
import Art4 from '../component/img/artDC4.PNG'
import { Link } from 'react-router-dom';


const MainpageProfile = () => {
    const [category, setCategory] = useState("buy");

    return (
    <div className="profile">

      <Container>
        <hr/>
        <div className='profileImg'>
            <img src={Profile} alt='profile' width={'100%'}/>
            <div>Whee</div>
        </div>
        <hr/>

      <div className="menu-buttons">

        <button className="catebtn" onClick={()=>{
                setCategory("buy")
            }}> 구매 목록 <span></span></button>

        <button className="catebtn" onClick={()=>{
                setCategory("sell")
            }}> 판매 목록 <span></span></button>

      </div>

      {category === "buy" && <>
        <div className='buy_profile'>
            <Link to="/cardDetail" className='new_content'>
                <img src={Example1} alt='profile'/>
            </Link>
            <Link to="/cardDetail" className='new_content'>
                <img src={Example2} alt='profile'/>
            </Link>
            <Link to="/cardDetail" className='new_content'>
                <img src={Example3} alt='profile'/>
            </Link>
        </div>
      </>}

      {category === "sell" && <>
        <div className='sell_profile'>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art2} alt='profile'/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art3} alt='profile'/>
                    </Link>
                    <Link to="/cardDetail" className='new_content'>
                        <img src={Art4} alt='profile'/>
                    </Link>
                </div>
      </>}


    </Container>


    </div>
  )
}

export default MainpageProfile