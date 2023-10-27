import React from "react";
import { Button } from "react-bootstrap";

const MenuButton = (props) => {
  return (
    <div>
      <Button variant="warning">{props.name}</Button>{" "}
    </div>
  );
};

export default MenuButton;
