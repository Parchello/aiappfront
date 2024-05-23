import React from "react";
import { LogoContainer } from "./Logo";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Logo() {
  return (
    <LogoContainer>
      <Link to={"/"}>
        <img
          src="icons8-chatbot-94.png"
          alt="chatbotlogo"
          width={"30px"}
          height={"30px"}
        />
        <Typography
          sx={{
            display: {
              md: "block",
              sm: "none",
              xs: "none",
              mr: "auto",
              fontWeight: "800",
              textShadow: "2px 2px 20px #000",
            },
          }}
        >
          <span>MY</span>
          -GPT
        </Typography>
      </Link>
    </LogoContainer>
  );
}

export default Logo;
