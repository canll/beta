import React from "react";
import { Box, CardMedia } from "@mui/material";
import logo from "../../../assets/app-logo.png";
const Logo = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        alt={"BetaLimitedLogo"}
        src={logo}
        sx={{ height: "50px", objectFit: "contain" }}
      />
    </Box>
  );
};

export default Logo;
