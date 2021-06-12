import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import '../App.css'
import { NavLink } from 'react-router-dom';
// import web from '../src/images/w10.png'


const useStyles = makeStyles(() => ({
spacing:{
  paddingTop:'20px'
},
  img:{
    width:'100%',
  paddingTop:'100px',
  paddingLeft:'25px'
  },
  centerimg:{
    display:'grid',
    justifyContent:'center',
    
  }

 }))

const Commons=(props)=> {
  const classes = useStyles();
  return (
 <section id="header" className="d-flex align-items-center">
 <div className="container fluid nav_bg">
 <div className="row">
 <div className="col-10 mx-auto">
 <div className="row">
 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
 <h1 className={classes.spacing}>{props.name}</h1>
 <h5 className="my-3">
 Polymer clay jewelry...become any shape or object you need it to be and takes textures like a dream..
 <br/>
 <br/>
Right from my childhood as I spent most of the time in making arts and crafts.. I thought to do something new.
<br/>
<br/>
In search of something I started doing clay jewelry and I felt great for crafting because it stays soft.and looks so pretty.. As, I love arts
I Enjoy working with polymer clay..
<br/>
<br/>
Check out polymer clay jewelry selection for the best in unique.handmade peices with best quality In affordable price.
 </h5>
 <div className="mt-3">
 <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
 <br/>
 
 </div>
 </div>
 <div className="col-lg-6 order-l order-lg-2 header-img classes.centerimg">
                <img
                  className={classes.img}
                  src="https://source.unsplash.com/user/erondu/1600x900"
                />
              </div>
        </Grid>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
  );
}

export default Commons;
