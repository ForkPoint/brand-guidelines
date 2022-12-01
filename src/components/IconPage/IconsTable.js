import React from "react";
import { IconsGrid, GridColumn, Icon } from "./styles";
import { Container } from "../Layout/styles";

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
import {
  BsFillMenuButtonWideFill,
  BsCardText,
  BsGrid1X2Fill,
} from "react-icons/bs";
import {
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiCheckCircle,
  FiSearch,
  FiRefreshCw,
  FiDownload,
  FiHelpCircle,
  FiLayout,
  FiVolume2,
  FiTrash2,
  FiUser,
  FiThumbsUp,
  FiXCircle,
} from "react-icons/fi";

const IconsTable = ({}) => {
  return (
    <Container>
      <IconsGrid>
        <GridColumn>
          <Icon>
            <AiTwotoneBuild />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineBgColors />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineFontColors />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineLeft />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineSearch />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineSetting />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <IoLogoSlack />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <BiConfused />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <AiOutlineBgColors />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <BsFillMenuButtonWideFill />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <BsGrid1X2Fill />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <BsCardText />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiCheck />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiChevronDown />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiChevronRight />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiChevronUp />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiChevronLeft />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiCheckCircle />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiSearch />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiThumbsUp />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiRefreshCw />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiXCircle />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiDownload />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiUser />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiVolume2 />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiLayout />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiHelpCircle />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiTrash2 />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiTrash2 />
          </Icon>
        </GridColumn>
        <GridColumn>
          <Icon>
            <FiTrash2 />
          </Icon>
        </GridColumn>
      </IconsGrid>
    </Container>
  );
};

export default IconsTable;
