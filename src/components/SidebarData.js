import React from "react";
import {
  FaUserEdit,
  FaListUl,
  FaRegChartBar,
  FaAlignJustify,
} from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import { MdDashboard, MdNotificationsActive } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
export const SidebarData = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/Dashboard",
    },
    {
      title: "Profile",
      icon: <FaUserEdit />,
      path: "/Profile",
    },

    {
        title: "Asset",
      icon: <FaListUl />,
      path: "/list/assets",
      iconClosed: <FaAngleDown />,
      iconOpened: <FaAngleUp />,
      subNav: [
        {
            title: "All",
          path: "/list/assets/all",
          cName: 'sub-nav',
        },
        {
            title: "Ready To Deploy",
          path: "/list/assets/readytodeploy",
          cName: 'sub-nav',
        },
        {
            title: "Deployed",
          path: "/list/assets/deployed",
          cName: 'sub-nav'
        },
        {
            title: "Crash",
          path: "/list/assets/crash",
          cName: 'sub-nav',
        },
      ],
    },
    {
        title: "Registration",
      icon: <TbFilePencil />,
      path: "/Registration/",
      iconClosed: <FaAngleDown />,
      iconOpened: <FaAngleUp />,
      subNav: [
        {
            title: "Asset Registration",
          path: "/Registration/AssetRegistration",
          cName: 'sub-nav',
        },
        {
            title: "Register Management",
          path: "/Registration/RegisterManagement",
          cName: 'sub-nav',
        },
      ],
    },

    {
        title: "Statistics - Reports",
      path: "/Statistics/Reports",
      icon: <FaRegChartBar />,
    },

    {
        title: "System Management",
      path: "/SystemManagement",
      icon: <FaAlignJustify />,
      iconClosed: <FaAngleDown />,
      iconOpened: <FaAngleUp />,
      subNav: [
        {
            title: "Asset Categories",
          path: "/SystemManagement/AssetCategories",
          cName: 'sub-nav',
        },

        {
            title: "Department",
          path: "/SystemManagement/Department",
          cName: 'sub-nav',
        },
        {
            title: "User",
          path: "/SystemManagement/User",
          cName: 'sub-nav',
        },
      ],
    },

    {
        title: "Notifications",
      path: "/Notifications",
      icon: <MdNotificationsActive />,
    },
  ];

