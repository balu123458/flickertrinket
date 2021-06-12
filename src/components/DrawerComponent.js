import { React, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Drawer, IconButton, List,Paper, Box,} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    
  },
  root: {
      width: '100vw',
      height: '100vh',
      display:'grid',
      justifyItems:'center',
      paddingTop:'10vh',
    
  },
  menuicon:{
    marginRight:'auto'
    // order:'1',
    // display:'flex',
    // flexGrow:1
  },
  drawItems: {
    textDecoration: "none",
   color:'navyblue',
    fontFamily: "Ubuntu",
  }
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const history = useHistory();

 
 

const onClose=({onClick}) => setopenDrawer(false)
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <div display='flex'  className={classes.menuicon}>
      <Drawer
        anchor="left"
        onClose={() => setopenDrawer(false)}
        open={openDrawer}
      >
          <IconButton  onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          <Paper component={Box} className={classes.root}>
              
        <List className={classes.drawer}>
          <ListItem button >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon> 
            <NavLink className ={classes.drawItems} to='/'> <ListItemText primary="Home"  onClick={onClose} /></NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <NavLink className ={classes.drawItems} to='/products'><ListItemText primary="Products"  onClick={onClose}/> </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <NavLink className ={classes.drawItems} to='/services'><ListItemText primary="Services"  onClick={onClose}/> </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <NavLink className ={classes.drawItems} to='/about'> <ListItemText primary="About Us"  onClick={onClose}/> </NavLink>
          </ListItem>
        </List>
        </Paper>
      </Drawer>
      <div  >
      <IconButton  onClick={() => setopenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      </div>
    </div>
  );
};

export default DrawerComponent;
