import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './img/Logo.png';
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connecter";
import { isNoEthereumObject } from "./error";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// 헤더 페이지 작성자 이금철
const Header = () => {
    const [balance, setBalance] = useState('');
    const [etherBalance, setEtherBalance] = useState("");

    const {
        chainedId,
        account,
        active,
        activate,
        deactivate,
        library
      } = useWeb3React();
    
      const handdleConnect = () => {
        if(active) {
          deactivate();
          return;
        }
        
        activate(injected, (error) => {
          if(isNoEthereumObject(error)) {
            window.open('https://metamask.io/download.html');
          }
        });
      }
      
      useEffect(() => {
		if (account) {
			library
				?.getBalance(account)
				.then((result: IResult) => setBalance(result._hex));
		}
	}, [account, library]);

    useEffect(() => {
        console.log(ethers)
        setEtherBalance(ethers.formatEther(Number(balance)))
    }, [balance])
    
    return (
        <header className='header'>
            
            <div className='contents'>

                {/* 로고 영역 */}
                <div className='logo_area'>
                    <Link to={"/"}>
                        <img src={Logo} alt='Logo' className='logo'/>
                    </Link>
                </div>

                {/* 검색 영역 */}
                <div className='search_area'>
                    <div className="input-container">
                        <input type="text" name="text" className="input" placeholder="search..."/>
                        <span className="icon"> 
                            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeWidth="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </span>
                    </div>
                </div>

                {/* 메뉴 영역 */}
                <div className='menu_area'>
                    {/* 지갑 연결 및 연결 해제 */}
                    <a className="fancy" href="#" onClick={handdleConnect}>
                        <span className="top-key"></span>
                        <span className="text">{active ? 'disconnet\n' + etherBalance + 'EH' :'wallet connet'}</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                    
                    {/* 지갑이 연결된 상태에서 프로필 페이지로 이동 */}
                    {active ? 
                    <>
                        <Link to='/mainprofile' className="fancy" href="#" >
                            <span className="top-key"></span>
                            <span className="text">profile</span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </Link>
                    </>:
                    <>
                        {/* 지갑이 연결되지 않은 상태에서 지갑 연결 */}
                        <div onClick={handdleConnect} className="fancy" href="#" >
                            <span className="top-key"></span>
                            <span className="text">profile</span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </div>
                    </>
                    }

                </div>
            </div>

            {/* <button type="button" onClick={handdleConnect}>{active ? 'disconnect':'connect'}</button> */}
        </header>
    );
}

export default Header;