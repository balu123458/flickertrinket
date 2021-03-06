import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  twodiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "30px",
  },
  img: {
    width: "100%",
  },
  padding: {
    padding: "25px",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
});

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.twodiv}>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
        <Grid className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
      </Grid>
      <Grid className={classes.twodiv}>
        <Grid className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
      </Grid>
      <Grid >
      <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
        <Grid className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
        
      </Grid>
    </>
  );
};

export default Services;
