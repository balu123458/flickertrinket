import { Grid, Container, Typography, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles,} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Navbar from "./Navbar";



const useStyles = makeStyles((theme) => ({
    Container: {
        width: "75%",
        fontFamily:'Roboto'
      },
      Right: {
          backgroundColor: "#fdc8bc",
          height: "100vh",
          display: 'inline-grid',
          width:'100%'
      },
}))

const HomeMobileView = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.Right}>
        
        <Navbar />
        <Container className={classes.Container}>

          <Typography variant="h3" className={classes.padding}>
              <strong>Welcome</strong></Typography>
          <Typography variant="h6">
            Since our opening, we have become masters of our craft our
            commitment to quality products, exceptional services and
            incomparable customer care keep our communitycoming back again and
            again.
          </Typography>
        </Container>
        <Container className={classes.Container}>
          
            <Typography variant="subtitle2">Social Media Platform</Typography>
          <br/>
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
        </div>
    )
}

export default HomeMobileView
