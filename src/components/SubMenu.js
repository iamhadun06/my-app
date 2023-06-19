// // import React from "react";

// // import { NavLink } from "react-router-dom";

// // const SubMenu = ({ items, isOpen }) => {
// //   return (
// //     <>
// //       {isOpen &&
// //         items.subNav?.map((item, index) => {
// //           return (
// //             <NavLink to={item.path} key={index}>
// //               {item.icon}
// //               <NavLink>{item.name}</NavLink>
// //             </NavLink>
// //           );
// //         })}
// //     </>
// //   );
// // };

// // export default SubMenu;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  width: 90%;
  color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 40px;
  padding: 1px 11px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background: #D9D9D970 44%;
    cursor: pointer;
    transition: all 1s;
    
  }
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const DropdownLink = styled(Link)`
  height: 40px;
  padding: 1px 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

  &:hover {
    background: #D9D9D970 44%;
    cursor: pointer;
    transition: all 1s;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const SidebarLink = styled(Link)`
//   display: flex;
//   color: #e1e9fc;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   list-style: none;
//   height: 60px;
//   text-decoration: none;
//   font-size: 18px;

//   &:hover {
//     background: #252831;
//     border-left: 4px solid #632ce4;
//     cursor: pointer;
//   }
// `;

// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `;

// const DropdownLink = styled(Link)`
//   background: #414757;
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;

//   &:hover {
//     background: #632ce4;
//     cursor: pointer;
//   }
// `;

// const SubMenu = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
//         <div>
//           {item.icon}
//           <SidebarLabel>{item.title}</SidebarLabel>
//         </div>
//         <div>
//           {item.subNav && subnav
//             ? item.iconOpened
//             : item.subNav
//             ? item.iconClosed
//             : null}
//         </div>
//       </SidebarLink>
//       {subnav &&
//         item.subNav.map((item, index) => {
//           return (
//             <DropdownLink to={item.path} key={index}>
//               {item.icon}
//               <SidebarLabel>{item.title}</SidebarLabel>
//             </DropdownLink>
//           );
//         })}
//     </>
//   );
// };

// export default SubMenu;