import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import WalletModal from "./WalletModal";
import { useAccount, useDisconnect } from "wagmi";
import HeaderButton from "./HeaderButton";

const Header = () => {
  // 지갑부분
  const [walletModal, setWalletModal] = useState(false);

  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const showWalletModal = () => {
    setWalletModal(true);
    // 모달창 열려있을 때 스크롤 막기
    document.body.style.overflow = "hidden";
  };

  const cancelModal = () => {
    setWalletModal(false);
    // 모달창 닫혔을 때 스크롤 활성
    document.body.style.overflow = "unset";
  };

  return (
    <div className="header">
      <div className="container">
        <div className="contents d-flex">
          {/* 로고 영역 */}
          <div className="logo_area">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </div>

          {/* 검색 영역 */}
          <div className="search_area">
            <div className="input-container">
              <input
                type="text"
                name="text"
                className="input"
                placeholder="search..."
              />
              <span className="icon">
                <svg
                  width="19px"
                  height="19px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeWidth="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="1"
                      d="M14 5H20"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M14 8H17"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                      stroke="#000"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M22 22L20 20"
                      stroke="#000"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </div>
          </div>

          {/* 메뉴 영역 */}
          {/* 지갑이 연결된 상태 */}
          {isConnected ? (
            <div className="menu_area">
              <div onClick={disconnect} className="fancy" href="#">
                <HeaderButton name="Wallet Disconnect" />
              </div>
              <Link to="/mainprofile" className="fancy" href="#">
                <HeaderButton name="profile" />
              </Link>
            </div>
          ) : (
            <div className="menu_area">
              {/* 지갑이 연결되지 않은 상태 */}
              <div onClick={showWalletModal} className="fancy" href="#">
                <HeaderButton name="Wallet Connet" />
              </div>
              <div onClick={showWalletModal} className="fancy" href="#">
                <HeaderButton name="profile" />
              </div>
            </div>
          )}
        </div>
        {/* 지갑 모달창 */}
        {walletModal && <WalletModal cancelModal={cancelModal} />}
      </div>
    </div>
  );
};

export default Header;
