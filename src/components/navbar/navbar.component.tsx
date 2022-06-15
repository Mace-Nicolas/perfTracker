import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TimelineIcon from "@mui/icons-material/Timeline";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import "./navbar.component.styles.scss";
import IconContainer from "../iconContainer/iconContainer.component";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbarContainer flex flex-col align-center items-center pt-6 '>
      <IconContainer isUserIcon>
        <Link to='/user'>
          <AccountCircleIcon fontSize='large' />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to='/performances'>
          <TimelineIcon />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to='/billing'>
          <AccountBalanceIcon />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to='/media'>
          <InstagramIcon />
        </Link>
      </IconContainer>
    </div>
  );
};

export default Navbar;
