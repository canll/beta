import React from "react";
import Logo from "./Modül/Seach/Logo";
import SearchBar from "./Modül/Seach/SearchBar";
import { Container, Card } from "@mui/material";

const Navbar = () => {
  return (
    <Container maxWidth={"xl"} sx={{ padding: "2rem" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <Logo />
        <SearchBar />
      </Card>
    </Container>
  );
};

export default Navbar;
