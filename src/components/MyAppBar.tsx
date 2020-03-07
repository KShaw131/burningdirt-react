import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

type AppBarProps = {};

export const MyAppBar = (props: AppBarProps) => {
  const {} = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Burning Dirt
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
