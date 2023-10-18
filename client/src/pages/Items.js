import React from "react";
import { Button, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import MenuButton from "../components/MenuButton";

const Items = () => {
  return (
    <div className="profile">
      <Container>
        <ProductCard />
        <h2>프로필 이름</h2>
        <hr></hr>

        <div className="menu-buttons">
          <MenuButton name="구매 목록" />
          <MenuButton name="판매 목록" />
          <MenuButton name="판매 등록" />
        </div>
      </Container>

      <div className="main-areas">
        <h4>구매할 목록이 없습니다.</h4>
        <Button variant="warning" width={50}>
          구매 페이지
        </Button>{" "}
      </div>
    </div>
  );
};

export default Items;
