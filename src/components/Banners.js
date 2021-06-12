import React from "react";
import '../App.css'
import image5 from "../Assets/image5.png";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
spacing:{
  // marginTop:'15vh',
  paddingTop:'18vh'
},
item:{
  borderRadius:'5px'

}
})

const tileData = [
  {
    id: 1,
    item: image5,
  },
  {
    id: 2,
    item: image2,
  },
  {
    item: image1,
    id: 3,
  },

  {
    item: image3,
    id: 4,
  },
  {
    item: image4,
    id: 5,
  },
];

const Banners = () => {
  const classes = useStyles();
  return (
    <Container className={classes.spacing}>
      <div elevation={15} className="gallery">
        {tileData.map((img, id) => {
          return (
            <div  className="pics" key={id}>
              <img  src={img.item} style={{width:'100%'}}/>
            </div>
          );
        })}
      </div>
      ;
    </Container>
  );
};

export default Banners;
