import React ,{ useState } from 'react';
import './CardDetail.css';
import { Link } from "react-router-dom";
import artDC2 from '../assets/images/draw_card.png'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function CardDetailMy() {

  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector('.card')).then(blob => {
      saveAs(blob, 'draw_card.png');
    });
  };

  return (
   
    <div className="CardDetail">

        <div className="main">
            <div className='detailTitle'>구매 정보</div>
            <hr/>

            <div className='main_contents'>

                <div className='detailImg'>
                  <div className='card'>
                    <img src={artDC2} alt='이미지'/>
                  </div>
                </div>

                <div className='detailDesc'>
                  <Link to='/'>
                    <button className="catebtn"> ART </button>
                  </Link>

                  <div className='detailSub'>
                    <div className='detailName'>놀라운 명함</div>
                    <div className='detailAuthor'>
                      Made by {" "}
                      <Link to='/MainpageProfile'>
                        <span>Whee</span>
                      </Link>
                    </div>

                    <div className='detailDes'>캐릭터가 놀라는 이미지를 사용해서 만들어진 디자인입니다. 캐릭터를 이용하여 자신의 이름을 부각시킬 수 있고 캐릭터를 통해 자신의 개성을 드러낼 수 있는 명함 이미지입니다.</div>

                    <div className='detailBuy'>

                      <button className="catebtn" onClick={onDownloadBtn}> 다운받기 </button>
                      <button className="catebtn"> 공유하기 </button>
                    </div>

                  </div>
                  
                </div>
          
            </div> 
        </div>
       
    
    </div>
    
    
  );
}

export default CardDetailMy;