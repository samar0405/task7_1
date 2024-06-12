
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./header.css"; 

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="header-content">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
