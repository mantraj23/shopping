import React, { useState } from "react";
import "../components_css/navbar.css";
import { Box, Typography, styled,  } from "@mui/material";
import LoginDialog from "./loginDialog";
import { Link } from "react-router-dom";

const IconContainer = styled(Box)`
  display: flex;
  gap: 5px;
`;

const logoUrl =
  "https://www.iitk.ac.in/new/images/page-images/logo/redlogo.jpg";

const Navbar = () => {
  const [open, setopen] = useState(false);

  const openDialog = () => {
    setopen(true);
  };

  return (
      <nav className="navbar">
        <div className="navbarContainer">
          <div className="logo">
            <a href="#">
              <Box>
                <img
                  src={logoUrl}
                  alt="logo"
                  style={{ height: 40, width: 40 }}
                />
              </Box>
            </a>
          </div>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit">Search</button>
          </div>
          <div className="navLinks">
            <button onClick={() => openDialog()}>
              <a href="#" className="loginButton">
                Login
              </a>
            </button>
            <Link to="/">Home</Link>
            <Link to="cartpage" className="iconLink">
              <IconContainer>
                <i className="fas fa-shopping-cart"></i>
                <Typography>Cart</Typography>
              </IconContainer>
            </Link>
            <Link to="/profilepage" className="iconLink">
              <IconContainer>
                <i className="fas fa-user"></i>
                <Typography>Account</Typography>
              </IconContainer>
            </Link>
          </div>
          <div className="menuIcon">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <LoginDialog open={open} setopen={setopen}/>
      </nav>
      
  );
};

export default Navbar;
