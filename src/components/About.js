// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import image5 from "../Assets/image5.png";
// import image1 from "../Assets/image1.png";
// import image2 from "../Assets/image2.png";
// import image3 from "../Assets/image3.png";
// import image4 from "../Assets/image4.png";
// import { Container, Typography } from "@material-ui/core";

// import { NavLink } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: 'theme.palette.background.paper',
//     paddingTop:'12vh'
//   },
//   gridList: {
//     width: '100%',
//     height: '100%',
//   },
//   img:{
//     width:'100%',
//     height:'100%'
//   }
// }));

// // The example data is structured as follows:



// const tileData = [
//   {
//     img: image5,
//     title: "Image",
//     author: "author",
   
//   },
//   {
//     img: image2,
//     title: "Image",
//     author: "author",
   
//     cols:2,

//   },
//   {
//     img: image1,
//     title: "Image",
//     author: "author",
//   },
 
   
//   {
//     img: image3,
//     title: "Image",
//     author: "author",
  
//     cols:2,
    
//   },
//   {
//     img: image4,
//     title: "Image",
//     author: "author",
//   },
// ];

// const Home = (props) => {
//   const classes = useStyles();

//   return (
    
// <section id="header" className="d-flex align-items-center">
//  <div className="container fluid nav_bg">
//  <div className="row">
//  <div className="col-10 mx-auto">
//  <div className="row">
//  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//  <h1>{props.name}</h1>
//  <h2 className="my-3">
//  We group of 3 B-tech Students created this channel with the aim to provide 
//  you the best of knowledge about latest technologies up there and keep you up-to date
//   with the programming sport.
//  </h2>
//  <div className="mt-3">
//  <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
//  </div>
//  </div>
//  <div className="col-lg-6 order-l order-lg-2 header-img">
//  <img src={props.imgsrc} className="img-fluid animated"></img>
//  </div>
//  </div>
//  </div>
//  </div>
//  </div>
//  </section>

//   //   <div className={classes.root}>
//   //     <GridList  className={classes.gridList} cols={3} >
//   //       {tileData.map((tile) => (
//   //         <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows}>
//   //          <Paper> <img className={classes.img} src={tile.img} alt={tile.title} /></Paper>
//   //         </GridListTile>
//   //       ))}
//   //     </GridList>
//   //   </div>
// //   <Container>
// // <section>
// // how much she would hate it.
// // </section>


  
// //   </Container>
  
//   );
  
// };

// export default Home;
import React from 'react';
import Commons from './Commons';


const Home=()=> {
  return (
    <>
   
 <Commons name='Explore your potential with CodinGyaan'  visit='/courses' btname='Get Started'></Commons>
 </>
  );
}

export default Home;
