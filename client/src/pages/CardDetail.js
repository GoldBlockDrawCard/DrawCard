import React ,{ useState } from 'react';
import { Link } from "react-router-dom";
import artDC2 from '../assets/images/artDC2.PNG'


function CardDetail() {
  
  const [title , setTitle] = useState('goldblock');

  const [designCategori,setCategori] = useState('Anna Lucia x Gees Bend Quilters: Generations')
  const [designName, setDesignName] = useState('Generation 253')
  const [designerName, setDesignerName] = useState('Owned by 49E635')
  const [designEx, setDesignEx] = useState('By ARSNL_Anna_Lucia_Gees...Generations is a collaboration between generative artist Anna Lucia and the quilters of Gees Bend. Anna Lucia developed an algorithm to craft a series of digital quilts inspired by the iconic patchworks of the Quilters of Gees Bend.')
  const [designPrice , setDesignPrice] = useState ('0.3 ETH')
  const [designPriceWon , setDesignPriceWon] = useState ("$549.49")

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
   
    <div className="CardDetail">
        {/* <header className='header'>
             {title}
        </header> */}

     
        
        <div className="main">
            <div className='detailTitle'>디자인 정보</div>
            <hr/>

            <div className='main_contents'>
                {/* <div className='left_img' onClick={handleClick}>
                    <img src={isRotated && '../component/img/Logo.png' || '../component/img/Logo.png'}  className={isRotated && 'rotated'}/>
                </div> */}


                <div className='detailImg'>
                  <img src={artDC2} alt='이미지'/>
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
                      <div className='detailPrice'>0.08EH&nbsp;&nbsp;&nbsp;&nbsp;</div>

                      <Link to='/CardBuy'>
                        <button className="catebtn"> 구매 </button>
                      </Link>
                    </div>

                  </div>
                  
                </div>
          
                    
                {/* <ul className='right_text'>
                      <li>{designCategori}</li>
                      <li>{designName}</li>
                      <li>{designerName}</li>
                      <li>{designEx}</li>
                      <li>
                        {designPrice}  <span>{designPriceWon}</span>
                            <Link to="/cardbuy" className='button'>
                                구매하기
                            </Link>
                      </li>
                </ul> */}
            </div> 
        </div>
       
    
    </div>
    
    
  );
}

export default CardDetail;