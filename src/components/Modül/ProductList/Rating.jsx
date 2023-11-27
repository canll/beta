import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ rating }) => {
  const star = rating;
  let starArr = [];

  for (let i = 0; i < star; i++) {
    starArr.push(
      <StarIcon style={{ border: "none", color: "yellow" }} key={i} />
    );
  }

  for (let j = 0; j < 5 - star; j++) {
    starArr.push(
      <StarBorderIcon style={{ color: "lightgray" }} key={`border${j}`} />
    );
  }

  return <Box>{starArr}</Box>;
};

export default Rating;
