import React ,{ useState } from 'react';
import Img from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

function CardBuy() {

    const [title , setTitle] = useState('goldblock');

    const [isModalOpen , setIsModalOpen] = useState(false);

    const openModal = () => {
      
      setIsModalOpen(true);
    };
  
    const closeModal = () =>{
      setIsModalOpen(false);
    };

    const [userName , setUserName] = useState("");
    const [userPosition , setPosition] = useState("");
    const [userAttach , setAttach] = useState("");

    const handler = e =>
    {
        setUserName(e.target.value);
    }
    const handler2 = e =>
    {
        setPosition(e.target.value);
    }
    const handler3 = e =>
    {
        setAttach(e.target.value);
    }
    return(
        <div className="buy">
             {/* <header className='header'>
                {title}
            </header> */}
            <div className="main">

                <h3 className='h3'>명함정보입력</h3>
                
                <div className='main_con'>

                    <div className='left_img'>
                      <img src={Img} />
                      <span>{userName}</span>
                      <span>{userPosition}</span>
                      <span>{userAttach}</span>
                    </div>

                    <ul className='right_text'>
                        <li>
                            <label>닉네임 :</label>
                            <input type="text" className='nick' value={userName} onChange={handler}></input>
                        </li>
                        <li>
                            <label>직급 :</label>
                            <input type="text" className='position' value={userPosition} onChange={handler2}></input>
                        </li>
                        <li>
                           <label>소속 :</label>
                           <input type="text" className=' attach' value={userAttach} onChange={handler3}></input> 
                        </li>                      
                    </ul>
                </div>
                {/* main_con end */}
                
                <div className="buy_cancle">
                  <button className='buy_btn' onClick={openModal}>구매</button>
                  <Link to="/CardDetail" className='cancle_btn'>취소</Link>
              </div>
              
              {isModalOpen && (
                
                <div className="modal2">
                  
                    <h3>입력한 내용은 바꿀수 없습니다 구매하시겠습니까?</h3>
                    <div className='modal_buy_cancle'>
                        <Link to="/CardDetailMy" className='cancle_btn'><button className='modal_buy'>구매</button></Link>
                          <button className='modal_cancle' onClick={closeModal}>취소</button>
                    </div>
                </div>
                
                
              )}

        </div>

        </div>

    );
}

export default CardBuy;