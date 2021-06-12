import React from "react";
import {  Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";




const useStyles = makeStyles({
  
  root: {
   width: 345,
   borderRadius:'20px'
  },
  media: {
    height: 240,
  },
});


const Product = ({imageUrl ,title,description,id}) => {
  const classes = useStyles();
  
  return (
    <div >
      
      <Card elevation={15} className={classes.root}>
      <Link href={`./productdetailpage/${id}`} >
        <CardActionArea  >
          
          <CardMedia className={classes.media}
           image={imageUrl}
           title={title}
           />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small" color="primary" variant='contained'>
            Add Cart
          </Button>
          <Button size="small" color="primary" variant='contained'>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;



