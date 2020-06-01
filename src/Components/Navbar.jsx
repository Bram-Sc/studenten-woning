import React from 'react';
import { createStyles, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Comic Sans MS',
    ].join(','),
    button: {
      textTransform: "none"
    }
  },
});

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
      color: "White",
    },
    NavBar: {
      backgroundColor: "#806c52",
      color: "White",
      fontFamily: "Comic Sans MS",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.NavBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button href="/index" color="inherit">
                Studenten Woning
            </Button>
              <Button href="/addProduct" color="inherit">
                Add product
            </Button>
              <Button href="/login" color="inherit">
                Log in
            </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}