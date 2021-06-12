import { Grid, Container, Typography, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Navbar from "./Navbar";
import logo from "../Assets/logo.png";
import Banners from "./Banners";
import HomeMobileView from "./HomeMobileView";

const useStyles = makeStyles((theme) => ({
  Container: {
    width: "75%",
    fontFamily: "Roboto",
  },
  Left: {
    backgroundColor: "#0e0325",
    height: "100vh",
    padding: theme.spacing(3, 2),
    justifyContent: "center",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Right: {
    backgroundColor: "#fdc8bc",
    height: "100vh",
    display: "inline-grid",
    width: "100%",
  },
  icon: {
    color: "black",
  },
  padding: {
    paddingBottom: "10px",
  },
  logo: {
    width: "50%",
  },
  mobileview: {
    display: "none",
  },
  sections: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // flexDirection:'column'
  },
}));

const theme = {
  spacing: 8,
};

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Grid container >
       

        {isMatch ? (
          <HomeMobileView />
        ) : (
          <>
          <Grid item xs={6} className={classes.Left}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Grid>
          <Grid container item xs={6} className={classes.Right}>
            <Navbar />
            <Container className={classes.Container}>
              <Typography variant="h3" className={classes.padding}>
                <strong>Welcome</strong>
              </Typography>
              <Typography variant="h6">
                Since our opening, we have become masters of our craft our
                commitment to quality products, exceptional services and
                incomparable customer care keep our communitycoming back again
                and again.
              </Typography>
            </Container>
            <Container className={classes.Container}>
              <Typography variant="subtitle2">Social Media Platform</Typography>
              <br />
              <>
                <IconButton className={classes.icon}>
                  <FacebookIcon />
                </IconButton>
                <IconButton className={classes.icon}>
                  <InstagramIcon />
                </IconButton>
                <IconButton className={classes.icon}>
                  <WhatsAppIcon />
                </IconButton>
              </>
            </Container>
          </Grid>
          </>
        )}
      </Grid>
      <Banners />
    </div>
  );
};

export default Home;
