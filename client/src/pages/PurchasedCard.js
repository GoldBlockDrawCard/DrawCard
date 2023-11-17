import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const PurchasedCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userDB, setUserDB] = useState([]);

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

  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "downloadCard.png");
    });
  };

  return (
    <div className="defaultContainer">
      <div className="container">
        <div className="designTitle">
          구매 정보 <hr />
        </div>

        <div className="designContainer d-flex">
          <div className="col-1"></div>

          <div className="designImg col-5 d-flex">
            <div className="card">
              <img
                src={require(`assets/images/${location.state.img}.PNG`)}
                alt="이미지"
              />
            </div>
          </div>

          <div className="col-1"></div>

          <div className="descContainer col-4">
            <Link to="/">
              <button className="catebtn col-3">
                {location.state.category}
                ART
              </button>
            </Link>

            <div className="cardContainer">
              <span className="cardName">{location.state.name}</span>

              <span className="cardAuthor d-flex">
                Made by{" "}
                {userDB
                  .filter((data) => data.userWallet === location.state.wallet)
                  .map((data) => (
                    <span
                      className="text-light"
                      key={data.id}
                      onClick={() => {
                        navigate(`/desingerprofile/idx=${data.id}`, {
                          state: {
                            id: data.id,
                            img: data.img,
                            designer: data.designer,
                            wallet: data.userWallet,
                          },
                        });
                      }}
                    >
                      <span className="designerName">{data.designer}</span>
                    </span>
                  ))}
              </span>

              <div className="cardDesc">{location.state.desc}</div>

              <div className="priceContainer d-flex col-12 align-items-center">
                <button className="catebtn col-4" onClick={onDownloadBtn}>
                  다운받기
                </button>
                <button className="catebtn col-4"> 공유하기 </button>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedCard;
