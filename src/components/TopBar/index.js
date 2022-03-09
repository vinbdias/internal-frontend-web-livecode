import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TopBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Challenge
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
