import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
const Basket = () => {
  const { total } = useSelector((store) => store.card);
  return (
    <Stack sx={{ position: "relative" }}>
      <Box
        sx={{
          minWidth: 25,
          minHeight: 25,
          borderRadius: "50%",
          backgroundColor: "#D32F2F",
          position: "absolute",
          top: -14,
          right: -8,
          fontSize: "17px",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "  center",
        }}
      >
        {total}
      </Box>
      <ShoppingCartIcon sx={{ fontSize: 40 }} color="error" />
    </Stack>
  );
};

export default Basket;
