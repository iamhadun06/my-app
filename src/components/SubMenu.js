import React from "react";

import { NavLink } from "react-router-dom";

const SubMenu = ({ items, isOpen }) => {
  return (
    <>
      {isOpen &&
        items.subNav?.map((item, index) => {
          return (
            <NavLink to={item.path} key={index}>
              {item.icon}
              <NavLink>{item.name}</NavLink>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;
