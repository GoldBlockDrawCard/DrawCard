import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DesignerProfile = () => {
  const [category, setCategory] = useState("buy");
  const location = useLocation();
  const navigate = useNavigate();

  const [cardDB, setCardDB] = useState([]);

  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/cards`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    let count = 0;

    const initCardData = res.map((card) => {
      return {
        idx: count++,
        id: card._id,
        category: card.cardCate,
        userWallet: card.wallet,
        designer: card.regiName,
        designeName: card.cardName,
        designDesc: card.cardDesc,
        price: card.cardPrice,
        img: card.cardImg,
        sale: card.cardSale
      };
    });

    setCardDB(initCardData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="defaultContainer">
      <div className="container">
        <hr />
        <div className="profileImg">
          <img
            src={require(`assets/images/${location.state.img}.PNG`)}
            alt="profile"
            width={"100%"}
          />
          <div>{location.state.designer}</div>
        </div>
        <hr />

        <div className="menu-buttons">
          <button
            className="catebtn"
            onClick={() => {
              setCategory("buy");
            }}
          >
            판매 중
          </button>

          <button
            className="catebtn"
            onClick={() => {
              setCategory("sell");
            }}
          >
            판매완료
          </button>
        </div>

        {category === "buy" &&
        (cardDB.filter((card) => card.designer === location.state.designer && card.sale === true) ==
          "" ? (
          <p>현재 판매중인 상품이 없습니다.</p>
        ) : (
          cardDB
            .filter((card) => card.designer === location.state.designer && card.sale === true)
            .map((card) => (
              <div
                className="new_content"
                key={card.id}
                onClick={() => {
                  navigate(`/designinfo/idx=${card.idx}`, {
                    state: {
                      idx: card.idx,
                      category: card.category,
                      name: card.designeName,
                      designer: card.designer,
                      desc: card.designDesc,
                      price: card.price,
                      img: card.img,
                      sale: card.sale
                    },
                  });
                }}
              >
                <img
                  src={require(`assets/images/${card.img}.PNG`)}
                  alt="profile"
                />
                <p className="cardtitle">
                  NickName<span>Job</span>
                  <span>Company</span>
                </p>
              </div>
            ))
        ))}

        {category === "sell" && (cardDB.filter((card) => card.designer === location.state.designer && card.sale === false) ==
          "" ? (
          <p>현재 판매완료된 상품이 없습니다.</p>
        ) : (
          cardDB
            .filter((card) => card.designer === location.state.designer && card.sale === false)
            .map((card) => (
              <div
                className="new_content"
                key={card.id}
                onClick={() => {
                  navigate(`/designinfo/idx=${card.idx}`, {
                    state: {
                      idx: card.idx,
                      category: card.category,
                      name: card.designeName,
                      designer: card.designer,
                      desc: card.designDesc,
                      price: card.price,
                      img: card.img,
                      sale: card.sale
                    },
                  });
                }}
              >
                <img
                  src={require(`assets/images/${card.img}.PNG`)}
                  alt="profile"
                />
                <p className="cardtitle">
                  NickName<span>Job</span>
                  <span>Company</span>
                </p>
              </div>
            ))
        ))}
      </div>
    </div>
  );
};

export default DesignerProfile;
