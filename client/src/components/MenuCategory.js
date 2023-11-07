import React from "react";
import { Link } from "react-router-dom";
import { MenuList } from "./MenuList";

const MenuCategory = ({ categoryID, category }) => {
  return (
    <>
      <ul className="main-cate">
        {MenuList.map((list) => {
          return (
            <Link
              className="catebtn col-1"
              to={`/Menu/${list.name}`}
              key={list.id}
            >
              <li
                className={`menuCategory ${
                  list.name === categoryID && "menuCategoryActive"
                }`}
              >
                {list.text}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default MenuCategory;
