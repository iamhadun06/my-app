import React, { useState } from 'react';

import {NavLink} from 'react-router-dom'; 


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <NavLink>{item.name}</NavLink>
        </div>
        <div>
          {item.subNav && subnav
            ? item.FaAngleDown
            : item.subNav
            ? item.FaAngleDown
            : null }
        </div>
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
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