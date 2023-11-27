import React from "react";
import ProductCart from "./Modül/ProductList/ProductCart";
import { Container, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { productList } = useSelector((store) => store.card);

  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        gap={1}
        flexWrap={"wrap"}
        alignContent={"space-evenly"}
        sx={{ "& > *": { mb: 2 } }}
      >
        {productList.map((item, key) => (
          <>
            <ProductCart {...item} key={item.id} />
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default ProductList;
