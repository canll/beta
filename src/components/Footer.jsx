import React from "react";
import { Button, Stack } from "@mui/material";
const Footer = () => {
  return (
    <Stack alignItems={"center"} mt={3}>
      <Button variant="contained" color="error">
        {" "}
        Load More...
      </Button>
    </Stack>
  );
};

export default Footer;
