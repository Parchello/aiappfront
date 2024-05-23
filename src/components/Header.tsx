import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo/Logo.tsx";
import React from "react";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
