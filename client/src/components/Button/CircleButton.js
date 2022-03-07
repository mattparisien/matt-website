import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";

function CircleButton({ children }) {
  const theme = useTheme();
  const matches  = useMediaQuery("(max-width: 900px");

  const circleButton = {
    textTransform: "none",
    color: theme.colors.light,
    fontFamily: 'Neue Mtl',
    fontSize: "1rem",
    backgroundColor: theme.colors.red,
    height: matches ? "5.3rem" : "12rem",
    width: matches ? "5.3rem" : "12rem",
    borderRadius: "50%",
    transition: "400ms ease",
    "&:hover":  {
      backgroundColor: theme.colors.red,
      transform: "scale(1.2)"
    },
    "& svg": {
      width: matches ? "20px" : "50px",
      height: matches ? "20px" : "50px",
    }
    
  }

	return <Button sx={circleButton}>{children}</Button>;
}

export default CircleButton;
