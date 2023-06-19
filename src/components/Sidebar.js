// // // /* eslint-disable array-callback-return */
// // // /* eslint-disable jsx-a11y/alt-text */
// // // /* eslint-disable no-unused-vars */
// // // /* eslint-disable import/no-anonymous-default-export */
// // import React, { useState } from "react";
// // import {
// //   FaUserEdit,
// //   FaListUl,
// //   FaRegChartBar,
// //   FaAlignJustify,
// // } from "react-icons/fa";
// // import { TbFilePencil } from "react-icons/tb";
// // import { MdDashboard, MdNotificationsActive } from "react-icons/md";
// // import { NavLink } from "react-router-dom";
// // import { FaAngleDown } from "react-icons/fa";
// // import { FaAngleUp } from "react-icons/fa";
// // import SubMenu from "./SubMenu";
// // //import SubMenu from "./SubMenu";
// // const Sidebar = ({ children }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   // eslint-disable-next-line no-unused-vars
// //   const toggle = () => setIsOpen(!isOpen);

// //   const menuItem = [
// //     {
// //       name: "Dashboard",
// //       icon: <MdDashboard />,
// //       path: "/Dashboard",
// //     },
// //     {
// //       name: "Profile",
// //       icon: <FaUserEdit />,
// //       path: "/Profile",
// //     },

// //     {
// //       name: "Asset",
// //       icon: <FaListUl />,
// //       path: "/list/assets",
// //       iconClosed: <FaAngleDown />,
// //       iconOpened: <FaAngleUp />,
// //       subNav: [
// //         {
// //           name: "All",
// //           path: "/list/assets/all",
// //         },
// //         {
// //           name: "Ready To Deploy",
// //           path: "/list/assets/readytodeploy",
// //         },
// //         {
// //           name: "Deployed",
// //           path: "/list/assets/deployed",
// //         },
// //         {
// //           name: "Crash",
// //           path: "/list/assets/crash",
// //         },
// //       ],
// //     },
// //     {
// //       name: "Registration",
// //       icon: <TbFilePencil />,
// //       path: "/Registration/",
// //       iconClosed: <FaAngleDown />,
// //       iconOpened: <FaAngleUp />,
// //       subNav: [
// //         {
// //           name: "Asset Registration",
// //           path: "/Registration/AssetRegistration",
// //         },
// //         {
// //           name: "Register Management",
// //           path: "/Registration/RegisterManagement",
// //         },
// //       ],
// //     },

// //     {
// //       name: "Statistics - Reports",
// //       path: "/Statistics/Reports",
// //       icon: <FaRegChartBar />,
// //     },

// //     {
// //       name: "System Management",
// //       path: "/SystemManagement",
// //       icon: <FaAlignJustify />,
// //       iconClosed: <FaAngleDown />,
// //       iconOpened: <FaAngleUp />,
// //       subNav: [
// //         {
// //           name: "Asset Categories",
// //           path: "/SystemManagement/AssetCategories",
// //         },

// //         {
// //           name: "Department",
// //           path: "/SystemManagement/Department",
// //         },
// //         {
// //           name: "User",
// //           path: "/SystemManagement/User",
// //         },
// //       ],
// //     },

// //     {
// //       name: "Notifications",
// //       path: "/Notifications",
// //       icon: <MdNotificationsActive />,
// //     },
// //   ];
// //   return (
// //     <div className="container">
// //       <div className="sidebar">
// //         <div className="top_section">
// //           <span className="logo"> </span>
// //           <div className="bars"> </div>
// //         </div>
// //         {menuItem.map((item, index) => (
// //           <>
// //             <NavLink
// //               to={item.path}
// //               key={index}
// //               className="link"
// //               activeclassName="active"
// //               onClick={toggle}
// //             >
// //               <div className="icon">{item.icon}</div>
// //               <div className="link_text">{item.name}</div>
              
// //             </NavLink>
// //             <div>
              
// //                 <div className="link_subMenu"> {item.subMenu}</div>
// //                 <SubMenu items={item} isOpen={isOpen}></SubMenu> 
// //             </div>
            
// //           </>
// //         ))}
       
// //       </div>
// //       <main>{children}</main>
// //     </div>
// //   );
// // };
// // export default Sidebar;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';



// const SidebarNav = styled.nav`
//   background: #2A3F88;
//   width: 210px;
//   height: 300vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 1;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 350ms;
//   z-index: 10;
//   color: #fff;

//   transition: all 0.5s;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div>
//           <div  to='#'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </div>
//         </div>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <div to='#'>
//               <AiIcons.AiOutlineClose onClick={showSidebar} />
//             </div>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </SidebarWrap>
//         </SidebarNav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #2A3F88;
  height: 80px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #2A3F88;
  width: 210px;
  height: 986px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;