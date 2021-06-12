import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../index.css";
import {
  Button,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { useHistory } from "react-router-dom";
import Cart from "./Cart";

const useStyles = makeStyles({
  nav: {
    backgroundColor: "transparent",
    position: "relative",
    height: "80px",
    justifyContent: "center",
    zIndex: "100",
  },
  navGroup: {
    display: "flex",
    flexGrow: 1,
  },
  Logo: {
    fontFamily: "Kaushan Script",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "auto",
    fontSize: "1.6rem",
  },
  navItems: {
    display: "flex",
    textDecoration: "none",
    paddingRight: "15px",
    paddingLeft: "15px",
    color: "black",
    fontFamily: "Ubuntu",
  },
  btn: {
    fontFamily: "Ubuntu",
    textDecoration: "none",
    marginLeft: "10px",
    
  },
  btnright: {
    flexGrow: 1,
  },
});

const Navbar = () => {
  const classes = useStyles();
  let history = useHistory();

  // responsive breaker points

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(theme);
  return (
    <div>
      <AppBar className={classes.nav} elevation={0}>
        <Toolbar>
          {isMatch ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navGroup}>
              <NavLink className={classes.navItems} to="/">
                Home
              </NavLink>
              <NavLink className={classes.navItems} to="/products">
                Products
              </NavLink>
              <NavLink className={classes.navItems} to="/services">
                Services
              </NavLink>
              <NavLink className={classes.navItems} to="about">
                About Us
              </NavLink>
            </div>
          )}
          {isMatch ? (
            <Typography className={classes.Logo}>Flicker Trinket</Typography>
          ) : (
            ""
          )}

          <Cart />
          {isMatch ? ('') : (
            <Button
            className={classes.btn}
            variant="contained"
            onClick={() => {
              history.push("/signup");
            }}
          >
            signUp
          </Button>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
