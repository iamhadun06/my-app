import React from 'react';
function Dashboard() {
    return (
        <div>
        <h1> Hello world! </h1>
        </div>
    )
}
export default Dashboard;

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