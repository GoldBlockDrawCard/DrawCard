import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Example from "../assets/images/ex1.png";
import Profile from "../assets/images/defualt.png";
import Change from "../assets/images/change.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAccount } from "wagmi";

const MainProfile = () => {
  const [category, setCategory] = useState("buy");
  const { address } = useAccount();
  // const [cardCategory, setCardCategory] = useState("");
  // const cateList = ["BEST", "NORMAL", "ART", "EFFECT"];
  const [isDropdownView, setDropdownView] = useState(false);

  // const handleClickContainer = () => {
  //   setDropdownView(!isDropdownView);
  // };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const DesignSchema = Yup.object().shape({
    cardName: Yup.string()
      .min(2, "2 글자 이상으로 입력해주세요!")
      .max(11, "10 글자 이하로 입력해주세요!")
      .required("이름을 입력해주세요!"),
    cardDesc: Yup.string()
      .min(10, "10 글자 이상으로 입력해주세요!")
      .max(200, "200 글자 이하로 입력해주세요!")
      .required("디자인 설명을 입력해주세요!"),
    cardCate: Yup.string()
      .min(2, "2 글자 이상으로 입력해주세요!")
      .max(11, "10 글자 이하로 입력해주세요!")
      .required("디자인 카테고리를 설정해주세요!"),
    cardPrice: Yup.number()
      .min(1, "1 이상으로 입력해주세요!")
      .max(999999, "999,999 이하로 입력해주세요!")
      .required("디자인 가격을 입력해주세요!"),
  });

  // const getData = async () => {
  //   const res = await fetch(`http://localhost:4000/api/cards`)
  //     .then((response) => response.json())
  //     .catch((error) => console.log(error));

  //   const initCardData = res.map((card) => {
  //     return {
  //       idx: card.idx,
  //       id: card._id,
  //       category: card.cardCate,
  //       userWallet: card.wallet,
  //       designer: card.regiName,
  //       designeName: card.cardName,
  //       designDesc: card.cardDesc,
  //       price: card.cardPrice,
  //       img: card.cardImg,
  //       sale: card.cardSale,
  //     };
  //   });

  //   setCardDB(initCardData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="defaultContainer">
      <Container>
        <hr />
        <div className="profileImg">
          <img
            src={Profile}
            alt="profile_default"
            width={"100%"}
            height={"350px"}
          />
          <div>
            Untitle0001
            <img className="profileDefault" src={Change} alt="profile" />
          </div>
        </div>
        <hr />

        <div className="menu-buttons">
          <button
            className="catebtn"
            onClick={() => {
              setCategory("buy");
            }}
          >
            구매 목록 <span></span>
          </button>

          <button
            className="catebtn"
            onClick={() => {
              setCategory("sell");
            }}
          >
            판매 목록 <span></span>
          </button>

          <button
            className="catebtn"
            onClick={() => {
              setCategory("addsell");
            }}
          >
            판매 등록 <span></span>
          </button>
        </div>

        {category === "buy" && (
          <>
            <div className="buy_profile">
              <Link to="/cardDetailmy" className="new_content">
                <img src={Example} alt="profile" />
              </Link>
            </div>
          </>
        )}

        {category === "sell" && (
          <>
            <div className="sellDprofile">
              <div>등록된 물품이 없습니다.</div>
              <button
                className="catebtn"
                onClick={() => {
                  setCategory("addsell");
                }}
              >
                판매 등록 <span></span>
              </button>
            </div>
          </>
        )}

        {category === "addsell" && (
          <Formik
            initialValues={{
              wallet: address,
              cardName: "",
              cardDesc: "",
              cardCate: "",
              cardPrice: "",
            }}
            validationSchema={DesignSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="sellAprofile">
                <label htmlFor="cardName">
                  디자인 이름
                  <Field id="cardName" name="cardName" />
                  {errors.cardName && touched.cardName ? (
                    <div id="cardNameError">{errors.cardName}</div>
                  ) : null}
                </label>
                <label htmlFor="cardDesc">
                  디자인 설명
                  <Field id="cardDesc" name="cardDesc" />
                  {errors.cardDesc && touched.cardDesc ? (
                    <div id="cardDescError">{errors.cardDesc}</div>
                  ) : null}
                </label>
                <label htmlFor="cardCate" onBlur={handleBlurContainer}>
                  디자인 카테고리
                  <Field id="cardCate" name="cardCate" />
                  {/* <label className="container" onClick={handleClickContainer}>
                    <button type="button" value="cardCate">
                      {cardCategory}
                    </button>
                    {isDropdownView && (
                      <ul>
                        {cateList.map((data, key) => (
                          <li key={key} onClick={() => setCardCategory(data)}>
                            {data}
                          </li>
                        ))}
                      </ul>
                    )}
                  </label> */}
                  {errors.cardCate && touched.cardCate ? (
                    <div id="cardCateError">{errors.cardCate}</div>
                  ) : null}
                </label>
                <label htmlFor="cardPrice">
                  디자인 가격
                  <Field id="cardPrice" name="cardPrice" type="number" />
                  {errors.cardPrice && touched.cardPrice ? (
                    <div id="cardPriceError">{errors.cardPrice}</div>
                  ) : null}
                </label>
                <label htmlFor="cardImg">
                  디자인 이미지
                  <Field id="cardImg" name="cardImg" type="file" />
                  {errors.cardImg && touched.cardImg ? (
                    <div id="cardImgError">{errors.cardImg}</div>
                  ) : null}
                </label>
                <button className="catebtn col-3" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </div>
  );
};

export default MainProfile;
