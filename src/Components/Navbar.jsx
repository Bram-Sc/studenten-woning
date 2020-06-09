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
  var login = "";

  if (localStorage.getItem("JWT") === "null" || localStorage.getItem("JWT") === null) {
    login = "Log in";
  } else {
    login = "Log out";
  }

  function checkLogin(e) {
    if (localStorage.getItem("JWT") !== "null" && localStorage.getItem("JWT") !== null) {
      localStorage.setItem("JWT", "null");
      e.preventDefault();
      window.location.reload(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.NavBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button id="Home" href="/index" color="inherit">
                Studenten Woning
            </Button>
              <Button id="AddProductBtn" href="/addProduct" color="inherit">
                Add product
            </Button>
              <Button id="AccountBtn" onClick={checkLogin} href="/login" color="inherit">
                {login}
            </Button>
            <Button id="Cart" href="/cart" color="inherit">
              Cart
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}