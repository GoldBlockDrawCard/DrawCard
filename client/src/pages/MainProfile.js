import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/images/defualt.png";
import Change from "../assets/images/change.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAccount } from "wagmi";

const MainProfile = () => {
  const [category, setCategory] = useState("buy");
  const { address } = useAccount();
  const navigate = useNavigate();
  const fileRef = useRef();

  const FILE_SIZE = 1024 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  const DesignSchema = Yup.object().shape({
    cardName: Yup.string()
      .min(2, "2 글자 이상으로 입력해주세요!")
      .max(11, "10 글자 이하로 입력해주세요!")
      .required("이름을 입력해주세요!"),
    cardDesc: Yup.string()
      .min(10, "10 글자 이상으로 입력해주세요!")
      .max(200, "200 글자 이하로 입력해주세요!")
      .required("디자인 설명을 입력해주세요!"),
    cardCate: Yup.string().required("디자인 카테고리를 설정해주세요!"),
    cardPrice: Yup.number()
      .min(1, "1 이상으로 입력해주세요!")
      .max(999999, "999,999 이하로 입력해주세요!")
      .required("디자인 가격을 입력해주세요!"),
    cardImg: Yup.mixed()
      .required("디자인을 추가해주세요!")
      .test("FILE_Type", "jpg, jpeg, png, gif 파일만 업로드 가능합니다!", (value) => {
        return value && fileRef.current
          ? SUPPORTED_FORMATS.includes(fileRef.current.files[0].type)
            ? true
            : false
          : true;
      })
      .test("fileSize", "파일 크기는 1MB까지만 가능합니다.", (value) => {
        return value && fileRef.current
          ? fileRef.current.files[0].size <= FILE_SIZE
            ? true
            : false
          : true;
      }),
  });

  const handleSubmit = (e) => {
    fetch("http://localhost:4000/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(e),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  const [cardDB, setCardDB] = useState([]);

  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/cards`)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    const initCardData = res.map((card) => {
      return {
        id: card._id,
        category: card.cardCate,
        userWallet: card.wallet,
        designer: card.regiName,
        designeName: card.cardName,
        designDesc: card.cardDesc,
        img: card.cardImg,
        sale: card.cardSale,
        buyer: card.buyer,
      };
    });

    setCardDB(initCardData);
  };

  useEffect(() => {
    getData();
  }, []);

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
              {cardDB.filter((card) => card.buyer === address) == "" ? (
                <div>
                  <p>현재 구매한 상품이 없습니다.</p>
                </div>
              ) : (
                cardDB
                  .filter((card) => card.buyer === address)
                  .map((card) => (
                    <div
                      className="new_content"
                      key={card.id}
                      onClick={() => {
                        navigate(`/purchased/idx=${card.id}`, {
                          state: {
                            id: card.id,
                            category: card.category,
                            name: card.designeName,
                            designer: card.designer,
                            desc: card.designDesc,
                            img: card.img,
                            wallet: card.userWallet,
                            buyer: card.buyer,
                          },
                        });
                      }}
                    >
                      <img
                        src={require(`assets/images/${card.img}.PNG`)}
                        alt="profile"
                      />
                    </div>
                  ))
              )}
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
              regiName: "untitle",
              cardName: "",
              cardDesc: "",
              cardCate: "",
              cardPrice: "",
              cardImg: "",
            }}
            validationSchema={DesignSchema}
            onSubmit={(e) => handleSubmit(e)}
          >
            {({ errors, touched }) => (
              <Form className="sellAprofile">
                <label
                  htmlFor="cardName"
                  className="col-5 d-flex justify-content-between"
                >
                  디자인 이름
                  <Field id="cardName" name="cardName" />
                </label>
                {errors.cardName && touched.cardName ? (
                  <div id="cardNameError">{errors.cardName}</div>
                ) : null}

                <label
                  htmlFor="cardDesc"
                  className="col-5 d-flex justify-content-between"
                >
                  디자인 설명
                  <Field id="cardDesc" name="cardDesc" />
                </label>
                {errors.cardDesc && touched.cardDesc ? (
                  <div id="cardDescError">{errors.cardDesc}</div>
                ) : null}

                <label
                  htmlFor="cardCate"
                  className="col-5 d-flex justify-content-between"
                >
                  디자인 카테고리
                  <Field id="cardCate" as="select" name="cardCate">
                    <option disabled value="">
                      --카테고리 선택--
                    </option>
                    <option value="BEST">BEST</option>
                    <option value="NORMAL">NORMAL</option>
                    <option value="ART">ART</option>
                    <option value="EFFECT">EFFECT</option>
                  </Field>
                </label>
                {errors.cardCate && touched.cardCate ? (
                  <div id="cardCateError">{errors.cardCate}</div>
                ) : null}

                <label
                  htmlFor="cardPrice"
                  className="col-5 d-flex justify-content-between"
                >
                  디자인 가격
                  <Field id="cardPrice" name="cardPrice" type="number" />
                </label>
                {errors.cardPrice && touched.cardPrice ? (
                  <div id="cardPriceError">{errors.cardPrice}</div>
                ) : null}

                <label
                  htmlFor="cardImg"
                  className="col-5 d-flex justify-content-between"
                >
                  디자인 이미지
                  <Field
                    id="cardImg"
                    name="cardImg"
                    type="file"
                    innerRef={fileRef}
                  />
                </label>
                {errors.cardImg && touched.cardImg ? (
                  <div id="cardImgError">{errors.cardImg}</div>
                ) : null}

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
