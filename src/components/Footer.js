import { makeStyles, TextField,useMediaQuery,
    useTheme, } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffeaa7",
    backgroundImage: "linear-gradient(315deg, #ffeaa7 0%, #000000 74%)",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridGap: "20px",
  },
  section1: {
    padding: "30px",
    display: "inline-flex",
    flexDirection: "column",
    color: "#fdc8bc",
  },
  section: {
    padding: "30px",
    display: "inline-flex",
    flexDirection: "column",
    color: "#fdc8bc",
  },
  border: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
  mobileview:{
    backgroundColor: "#ffeaa7",
    backgroundImage: "linear-gradient(315deg, #ffeaa7 0%, #000000 74%)",
    display: "grid",
      flexDirection:"column"
  },
  btn:{
    backgroundColor:'green',
    borderRadius:'5px',
    width:'50%'
  }
});



const Footer = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  return (
    <div className={isMatch ? (classes.mobileview) : (classes.root)}>
      <section className={classes.section1}>
        <a>Contact</a>
        <a>Faq</a>
        <a>Shipping & Returns</a>
        <a>Store Policy</a>
        <a>Privacy Policy</a>
        <a>Terms and Conditions</a>
        <a>Refund Policy</a>
        {/* <NavLink to="">Contact</NavLink>
        <NavLink>Faq</NavLink>
        <NavLink>Shipping & Returns</NavLink>
        <NavLink>Store Policy</NavLink>
        <NavLink>Privacy Policy</NavLink>
        <NavLink>Terms and Conditions</NavLink>
        <NavLink>Refund Policy</NavLink> */}
      </section>
      <div>
        <section className={classes.section}>
          <a>Email: flickertrinket@gmail.com</a>
          {/* <NavLink>Email: clayeditbyshivani@gmail.com</NavLink> */}
        </section>
        <section className={classes.section}>
          <TextField
            className={classes.border}
            id="mail"
            label="Email"
            variant="outlined"
          />
          <button className={classes.btn}>
            subscribe
          </button>
        </section>
      </div>
    </div>
  );
};

export default Footer;
