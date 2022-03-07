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
    height: matches ? "5.3rem" : "11rem",
    width: matches ? "5.3rem" : "11rem",
    borderRadius: "50%",
    transition: "400ms ease",
    "&:hover":  {
      backgroundColor: theme.colors.purple,
      transform: "scale(1.2)"
    },
    "& svg": {
      width: matches ? "20px" : "40px",
      height: matches ? "20px" : "40px",
    }
    
  }

	return <Button sx={circleButton} onClick={onClick}>{children}</Button>;
}

export default CircleButton;
