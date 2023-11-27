import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid lightgray",
  borderRadius: "30px",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));
const SearchBar = () => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon color="disabled" />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Searching for..."
          inputProps={{ "aria-label": "search" }}
        />
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{ borderBottomRightRadius: "30px", borderTopRightRadius: "30px" }}
        >
          Search
        </Button>
      </Search>
    </Box>
  );
};

export default SearchBar;
