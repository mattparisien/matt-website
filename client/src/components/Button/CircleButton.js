import { useMediaQuery } from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

function CircleButton({ children, onClick }) {
  const theme = useTheme();
  const matches  = useMediaQuery("(max-width: 900px)", {noSsr: true});
  const tablet = useMediaQuery(
		"(max-width: 1024px) and (orientation: landscape)"
	);

  const circleButton = {
    textTransform: "none",
    color: theme.colors.light,
    fontFamily: 'Neue Mtl',
    fontSize: "1rem",
    backgroundColor: theme.colors.purple,
    height: matches || tablet ? "4rem" : "9rem",
    width: matches  || tablet ? "4rem" : "9rem",
    borderRadius: "50%",
    transition: "400ms ease",
    margin: "20px",
    "&:hover":  {
      backgroundColor: theme.colors.purple,
      transform: matches || tablet ? "none" : "scale(1.2)"
    },
    "& svg": {
      width: matches || tablet ? "14px" : "30px",
      height: matches  || tablet ? "14px" : "30px",
    }
    
  }

	return <Button sx={circleButton} onClick={onClick}>{children}</Button>;
}

export default CircleButton;
