import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
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
import { IoShapesOutline } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";
import { BsFillMenuButtonWideFill, BsGrid1X2Fill } from "react-icons/bs";

import { ThemeContext } from "./../../App";

const linksArray = [
  {
    label: "Branding",
    icon: <AiTwotoneBuild />,
    to: "/",
  },
  {
    label: "Logos",
    icon: <IoShapesOutline />,
    to: "/logos",
  },
  {
    label: "Colors",
    icon: <AiOutlineBgColors />,
    to: "/colors",
  },
  {
    label: "Typography",
    icon: <AiOutlineFontColors />,
    to: "/typography",
  },
  {
    label: "Buttons",
    icon: <BsFillMenuButtonWideFill />,
    to: "/buttons",
  },
  {
    label: "Grid",
    icon: <BsGrid1X2Fill />,
    to: "/grid",
  },
  {
    label: "Photography",
    icon: <MdPhotoCamera />,
    to: "/photography",
  },
];

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <SSidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
        title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        aria-label="Toggle navigation"
      >
        <AiOutlineLeft />
      </SSidebarButton>

      <SLogo>
        <Link to="/" title="Forkpoint Brand Guide">
          <img src={logoSVG} alt="Forkpoint Logo" />
        </Link>
      </SLogo>

      <SDivider />

      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to || (to === "/buttons" && pathname === "/button")}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
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
          aria-label="Toggle dark mode"
          title="Toggle color theme"
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;

