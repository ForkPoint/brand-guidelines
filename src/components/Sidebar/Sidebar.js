import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
  AiTwotoneBuild,
  AiOutlineBgColors,
  AiOutlineFontColors,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io";
import { BiConfused } from "react-icons/bi";
import { BsFillMenuButtonWideFill, BsCardText, BsGrid1X2Fill } from "react-icons/bs";
import { GiEgyptianProfile } from "react-icons/gi";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Branding",
    icon: <AiTwotoneBuild />,
    to: "/",
    notification: 0,
  },
  {
    label: "Logos",
    to: "/logos",
    icon: <IoLogoSlack />,
    notification: 0,
  },
  {
    label: "Colors",
    icon: <AiOutlineBgColors />,
    to: "/colors",
    notification: 0,
  },
  {
    label: "Icon",
    icon: <BiConfused />,
    to: "/icon",
    notification: 0,
  },
  {
    label: "Typography",
    icon: <AiOutlineFontColors />,
    to: "/typography",
    notification: 0,
  },
  {
    label: "Button",
    icon: <BsFillMenuButtonWideFill />,
    to: "/button",
    notification: 0,
  },
  {
    label: "Avatar",
    icon: <GiEgyptianProfile />,
    to: "/avatar",
    notification: 0,
  },
  {
    label: "Input",
    icon: <BsCardText />,
    to: "/input",
    notification: 0,
  },
  {
    label: "Grid",
    icon: <BsGrid1X2Fill />,
    to: "/grid",
    notification: 0,
  },
];

const secondaryLinksArray = [
];

export default Sidebar;
