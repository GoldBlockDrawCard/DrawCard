import React from "react";
import { Card } from "react-bootstrap";
import imgfile from "../assets/images/ex1.png";

const ProductCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgfile} />
      </Card>
    </div>
  );
};

export default ProductCard;
