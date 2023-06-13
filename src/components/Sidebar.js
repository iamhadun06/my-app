/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'; 
import SubMenu from './SubMenu';
import {
    FaUserEdit, 
    FaListUl, 
    FaRegChartBar, 
    FaAlignJustify
} from 'react-icons/fa';
import {TbFilePencil} from "react-icons/tb";
import {MdDashboard, MdNotificationsActive} from "react-icons/md"
import {NavLink} from 'react-router-dom'; 
import {FaAngleDown} from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa"; 
const Sidebar = ({children, subNav }) => {
    const[isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            name: "Dashboard",
            icon: <MdDashboard/>,
            path: "/main",
        },
        {
            name: "Profile",
            icon: <FaUserEdit/>,
            path: "/profile",
        },

        {
            name: "Asset", 
            icon: <FaListUl/>,
            path: "/list/assets",
            iconClosed: <FaAngleDown/>,
            iconOpened: <FaAngleUp/>,
            subNav: [
            {
                name: "All", 
                path: "/list/assets/all"
            },
            {
                name: "Ready To Deploy", 
                path: "/list/assets/readytodeploy"
            }, 
            {
                name: "Deployed", 
                path: "/list/assets/deployed"
            }, 
            {
                name: "Crash", 
                path: "/list/assets/crash"
            },
            ]
        },
        {
            name: "Registration",
            icon: <TbFilePencil/>, 
            path: "/registration/",
            iconClosed: <FaAngleDown/>,
            iconOpened: <FaAngleUp/>,
            subNav: [
                {
                    name: 'Asset Registration', 
                    path: '/registration/AssetRegistration', 
                }, 
                {
                    name: 'Register Management', 
                    path: '/registration/RegisterManagement', 
                }
            ]
        },
    
        {
            name: 'Statistics - Reports', 
            path: '/statistics/reports',
            icon: <FaRegChartBar/>, 
        },     
    
        {
            name: 'System Management', 
            path: '/SystemManagement',
            icon: <FaAlignJustify/>,
            iconClosed: <FaAngleDown/>,
            iconOpened: <FaAngleUp/>,
            subNav: [
                {
                    name: 'Asset Categories', 
                    path: '/SystemManagement/AssetCategories',
                },
                        
                {
                    name: 'Department', 
                    path: '/SystemManagement/department'
                }, 
                {
                    name: 'User', 
                    path: '/SystemManagement/user'
                }, 
            ],
        },
    
        {
            name: 'Notifications', 
            path: '/notifications',
            icon: <MdNotificationsActive/>, 
        },
    ]
    return (
        <div className = "container" >
            <div className = "sidebar">
                <div className = "top_section" >
                    <span className = "logo"> </span>
                </div>
                <div className="text">
                    <div>
                    {
                        menuItem.map((item) => {
                            <NavLink to = {item.path} className = "link" activeclassName = "active" >
                            <div className = "icon"> {item.icon} </div>
                            <div className="link_text"> {item.name} </div>
                            </NavLink>
                            return <SubMenu item={item} />
                        }) 
                    } 
                    </div>
                </div>
                
            </div>
            
    
        </div>
    );
};
export default Sidebar; 
