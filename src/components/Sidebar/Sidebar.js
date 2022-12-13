import React, { useContext, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
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
} from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io";
import { BiConfused } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";
import { BsFillMenuButtonWideFill, BsGrid1X2Fill } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

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
    label: "Grid",
    icon: <BsGrid1X2Fill />,
    to: "/grid",
    notification: 0,
  },
  {
    label: "Photography",
    icon: <MdPhotoCamera />,
    to: "/photography",
    notification: 0,
  },
];

const secondaryLinksArray = [
];

export default Sidebar;
