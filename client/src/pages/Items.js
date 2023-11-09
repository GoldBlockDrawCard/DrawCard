import React from "react";
import { Button, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Items = () => {
  return (
    <div className="defaultContainer">
      <Container>
        <ProductCard />
        <h2>프로필 이름</h2>
        <hr></hr>

        <div className="menu-buttons">
          <button className="catebtn col-1">
            <span>구매 목록</span>
          </button>
          <button className="catebtn col-1">
            <span>판매 목록</span>
          </button>
          <button className="catebtn col-1">
            <span>판매 등록</span>
          </button>
        </div>
      </Container>

      <div className="main-areas">
        <h4>구매할 목록이 없습니다.</h4>
        <Button variant="warning" width={50}>
          구매 페이지
        </Button>
      </div>
    </div>
  );
};

export default Items;
