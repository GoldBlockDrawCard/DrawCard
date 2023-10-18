import { useState } from 'react';
import { Link } from "react-router-dom";
import artDC2 from '../assets/images/artDC2.PNG'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function CardBuypage() {

    const [userName , setUserName] = useState("");
    const [userPosition , setPosition] = useState("");
    const [userAttach , setAttach] = useState("");

    const [isModalOpen , setIsModalOpen] = useState(false);

    const openModal = () => {
      
      setIsModalOpen(true);
    };
  
    const closeModal = () =>{
      setIsModalOpen(false);
    };

    const nickHandler = e =>
    {
        setUserName(e.target.value);
    }
    const positionHandler = e =>
    {
        setPosition(e.target.value);
    }
    const attacHandler = e =>
    {
        setAttach(e.target.value);
    }

    const onDownloadBtn = () => {
        domtoimage.toBlob(document.querySelector('.card')).then(blob => {
          saveAs(blob, 'draw_card.png');
        });
      };
  
  return (
   
    <div className="CardDetail">

        <div className="main">
            <div className='detailTitle'>디자인 구매</div>
            <hr/>

            <div className='main_contents'>

                <div className='detailImg'>
                    <div className='card'><img src={artDC2} alt='이미지'/>
                        <div className='card_name'>{userName}</div>
                        <div className='card_position'>{userPosition}</div>
                        <div className='card_attach'>{userAttach}</div>
                    </div>
                    
                </div>

                <div className='detailDesc'>
                  <Link to='/'>
                    <button className="catebtn"> ART </button>
                  </Link>

                  <div className='buySub'>
                    <div className='detailName'>&nbsp;정보 입력</div>

                    <form className='inputForm'>
                        <div>
                            <div>닉네임 : </div>
                            <input type="text" className='nickname' value={userName} onChange={nickHandler}></input>
                        </div>
                        <div>
                            <div>직&nbsp;&nbsp;&nbsp;책 : </div>
                            <input type="text" className='position' value={userPosition} onChange={positionHandler}></input>
                        </div>
                        <div>
                            <div>소&nbsp;&nbsp;&nbsp;속 : </div>
                            <input type="text" className='attach' value={userAttach} onChange={attacHandler}></input>
                        </div>
                    </form>




                    <div className='BuyBtn'>
                      <button className="catebtn" onClick={openModal}> 구매 </button>
                      <Link to='/'>
                        <button className="catebtn"> 취소 </button>
                      </Link>

                    </div>

                    {isModalOpen && (
                
                      <div className="modal2">

                        <div className='modaltop'>입력한 내용은 바꿀수 없습니다. </div>
                        <div className='modalbtm'>구매하시겠습니까?</div>
                            <Link to="/MainProfile"><button className='catebtn'>구매</button></Link>
                            <button className='catebtn' onClick={closeModal}>취소</button>
                      </div>
                      
                      
                    )}

                  </div>
                  
                </div>
          
            </div> 
        </div>
       
    
    </div>
    
    
  );
}

export default CardBuypage;