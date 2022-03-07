import { useMediaQuery } from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

function CircleButton({ children, onClick }) {
  const theme = useTheme();
  const matches  = useMediaQuery("(max-width: 900px");

  const circleButton = {
    textTransform: "none",
    color: theme.colors.light,
    fontFamily: 'Neue Mtl',
    fontSize: "1rem",
    backgroundColor: theme.colors.purple,
    height: matches ? "4rem" : "9rem",
    width: matches ? "4rem" : "9rem",
    borderRadius: "50%",
    transition: "400ms ease",
    margin: "20px",
    "&:hover":  {
      backgroundColor: theme.colors.purple,
      transform: "scale(1.2)"
    },
    "& svg": {
      width: matches ? "14px" : "30px",
      height: matches ? "14px" : "30px",
    }
    
  }

	return <Button sx={circleButton} onClick={onClick}>{children}</Button>;
}

export default CircleButton;
