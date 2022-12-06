import React from "react";
import { IconsGrid, GridColumn, Icon } from "./styles";
import { Container } from "../Layout/styles";

import {
  FiSearch,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiEdit,
  FiType,
  FiBold,
  FiUnderline,
  FiCopy,
  FiCrop,
  FiMonitor,
  FiCloud,
  FiCode,
  FiGlobe,
  FiHeadphones,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiSlack,
  FiTrello,
  FiCalendar,
  FiLink,
  FiCoffee,
  FiGift,
  FiFilm,
  FiSend,
} from "react-icons/fi";
import {
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  bold,
  calendar,
  cloud,
  code,
  coffee,
  copy,
  crop,
  edit,
  facebook,
  film,
  gift,
  globe,
  headphones,
  instagram,
  link,
  linkedin,
  mail,
  monitor,
  search,
  send,
  slack,
  trello,
  twitter,
  type,
  underline,
  youtube,
} from "../../assets";

const IconsTable = ({}) => {
  return (
    <Container>
      <IconsGrid>
        {icons.map(({ icon, name }) => (
          <GridColumn>
            <a href={icon} download={name} target="_blank">
              <Icon>
                <img src={icon}></img>
                <p>{name}</p>
              </Icon>
            </a>
          </GridColumn>
        ))}
      </IconsGrid>
    </Container>
  );
};
const icons = [
  {
    icon: alignCenter,
    name: "AlignCenter",
  },
  {
    icon: alignJustify,
    name: "AlignJustify",
  },
  {
    icon: alignLeft,
    name: "AlignLeft",
  },
  {
    icon: alignRight,
    name: "AlignRight",
  },
  {
    icon: bold,
    name: "Bold",
  },
  {
    icon: calendar,
    name: "Calendar",
  },
  {
    icon: cloud,
    name: "Cloud",
  },
  {
    icon: code,
    name: "Code",
  },
  {
    icon: coffee,
    name: "Coffee",
  },
  {
    icon: copy,
    name: "Copy",
  },
  {
    icon: crop,
    name: "Crop",
  },
  {
    icon: edit,
    name: "Edit",
  },
  {
    icon: facebook,
    name: "Facebook",
  },
  {
    icon: film,
    name: "Film",
  },
  {
    icon: gift,
    name: "Gift",
  },
  {
    icon: globe,
    name: "Globe",
  },
  {
    icon: headphones,
    name: "Headphones",
  },
  {
    icon: instagram,
    name: "Instagram",
  },
  {
    icon: link,
    name: "Link",
  },
  {
    icon: linkedin,
    name: "Linkedin",
  },
  {
    icon: mail,
    name: "Mail",
  },
  {
    icon: monitor,
    name: "Monitor",
  },
  {
    icon: search,
    name: "Search",
  },
  {
    icon: send,
    name: "Send",
  },
  {
    icon: slack,
    name: "Slack",
  },
  {
    icon: trello,
    name: "Trello",
  },
  {
    icon: twitter,
    name: "Twitter",
  },
  {
    icon: type,
    name: "Type",
  },
  {
    icon: underline,
    name: "Underline",
  },
  {
    icon: youtube,
    name: "YouTube",
  },
];

export default IconsTable;
