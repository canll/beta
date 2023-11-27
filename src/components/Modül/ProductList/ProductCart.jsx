import React from "react";
import {
  Card,
  Stack,
  Box,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import Rating from "../ProductList/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { increase, discrease } from "../../../Redux/control/productCartSlice";

const ProductCart = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  image,
  discount,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: "340px", height: "440px" }}>
      <Stack
        sx={{
          backgroundColor: "#EFEFEF",
          height: "310px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            width: "50px",
            fontSize: "14px",
            backgroundColor: "#D32F2F",
            color: "white",
            padding: "3px 6px",
            borderRadius: "30px",
          }}
        >
          {discount}
        </Box>
        <CardMedia
          component="img"
          alt={"BetaLimitedLogo"}
          src={image}
          sx={{ height: "250px", objectFit: "contain" }}
        />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ padding: "1rem" }}
      >
        <Stack justifyContent={"space-evenly"} gap={1}>
          <Typography> {name}</Typography>
          <Rating rating={rating} />
          <Stack flexDirection={"row"} gap={2}>
            <Typography color={"error"}>${price}</Typography>
            <Typography style={{ textDecoration: "line-through" }}>
              ${originalPrice}
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"end"} alignItems={"center"} gap={0.4}>
          {quantity > 0 && (
            <>
              <IconButton
                style={{ border: "1px solid #C62828", borderRadius: "10px" }}
                size="small"
                onClick={() => {
                  dispatch(discrease(id));
                }}
              >
                <RemoveIcon color="error" />
              </IconButton>
              <Typography color="error ">{quantity}</Typography>
            </>
          )}

          <IconButton
            style={{ border: "1px solid #C62828", borderRadius: "10px" }}
            size="small"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <AddIcon color="error" />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCart;
