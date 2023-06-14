// /* eslint-disable array-callback-return */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable no-unused-vars */
// /* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'; 
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
//import SubMenu from "./SubMenu";
const Sidebar = ({children }) => {
    const[isOpen, setIsOpen] = useState(false); 
    // eslint-disable-next-line no-unused-vars
    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem = [
        {
            name: "Dashboard",
            icon: <MdDashboard/>,
            path: "/Dashboard",
        },
        {
            name: "Profile",
            icon: <FaUserEdit/>,
            path: "/Profile",
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
            path: "/Registration/",
            iconClosed: <FaAngleDown/>,
            iconOpened: <FaAngleUp/>,
            subNav: [
                {
                    name: 'Asset Registration', 
                    path: '/Registration/AssetRegistration', 
                }, 
                {
                    name: 'Register Management', 
                    path: '/Registration/RegisterManagement', 
                }
            ]
        },
    
        {
            name: 'Statistics - Reports', 
            path: '/Statistics/Reports',
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
                    path: '/SystemManagement/Department'
                }, 
                {
                    name: 'User', 
                    path: '/SystemManagement/User'
                }, 
            ],
        },
    
        {
            name: 'Notifications', 
            path: '/Notifications',
            icon: <MdNotificationsActive/>, 
        },
    ]
    return (
                <div className = "container" >
                    <div className = "sidebar">
                        <div className = "top_section" >
                            <span className = "logo"> </span>
                        <div className="bars"> </div>
                        </div>
                        { menuItem.map((item, index)=> (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                        </NavLink>
                        // return <SubMenu item = {item}/>;
                           ) 
                        )
                    }
                        {/* <div sidebar={setIsOpen}>
                        <SubMenu>
                        <SubMenu to='#'>
                        <FaAngleDown onClick={setIsOpen} />
                        </SubMenu>
                        {menuItem.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                        })}
                        </SubMenu>
                        </div> */}
                    </div>
                    <main>{children}</main>
                </div>
            );
        };
        export default Sidebar; 