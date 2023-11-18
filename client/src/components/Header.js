import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import WalletModal from "./WalletModal";
import RegistrationModal from "./registrationModal";
import { useAccount, useDisconnect } from "wagmi";
import HeaderButton from "./HeaderButton";
import { ReactComponent as ReadingGlasses } from "assets/svg/readingGlasses.svg";

const Header = () => {
  const navigate = useNavigate();

  // 지갑부분
  const [walletModal, setWalletModal] = useState(false);
  const [regiModal, setRegiModal] = useState(false);
  const [userDB, setUserDB] = useState([]);

  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();

  const getUserData = async () => {
    const res = await fetch(`http://localhost:4000/api/users`)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    const initUserData = res.map((user) => {
      return {
        id: user._id,
        userWallet: user.wallet,
        designer: user.regiName,
        img: user.profileImg,
      };
    });

    setUserDB(initUserData);
  };

  useEffect(() => {
    getUserData();
  }, []);

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

  const showRegiModal = () => {
    setRegiModal(true);
    // 모달창 닫혔을 때 스크롤 활성
    document.body.style.overflow = "hidden";
  };

  const cancelRegiModal = () => {
    setRegiModal(false);
    // 모달창 닫혔을 때 스크롤 활성
    document.body.style.overflow = "unset";
    window.location.reload();
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
                <ReadingGlasses />
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
              {userDB.filter((user) => user.userWallet === address) ? (
                userDB
                  .filter((user) => user.userWallet === address)
                  .map((user) => (
                    <div
                      className="fancy"
                      href="#"
                      key={user.id}
                      onClick={() => {
                        navigate(`/profile/idx=${user.id}`, {
                          state: {
                            id: user.id,
                            img: user.img,
                            designer: user.designer,
                            wallet: user.userWallet,
                          },
                        });
                      }}
                    >
                      <HeaderButton name="profile" />
                    </div>
                  ))
              ) : (
                <div onClick={showRegiModal} className="fancy" href="#">
                  <HeaderButton name="registration" />
                </div>
              )}
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
        {regiModal && (
          <RegistrationModal
            address={address}
            cancelRegiModal={cancelRegiModal}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
