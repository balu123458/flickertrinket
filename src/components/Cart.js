import {React,useState} from 'react'
import {Drawer, IconButton,makeStyles, } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import AddCart from './AddCart'
import Button from '@material-ui/core/Button';



const drawerWidth = '30vw';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    
  },
 checkout:{
     backgroundColor:'#03AC13'
 }
}));

const Cart = () => {

   
    const classes = useStyles();

    const onClose=({onClick}) => setopenDrawer(false)
  const [openDrawer, setopenDrawer] = useState(false);

    return (
        <>
        <Drawer
        anchor="right"
        open={openDrawer}
        
        >
            <IconButton>
            <CloseIcon onClick={onClose}/>
            </IconButton>
            {/* <List className={classes.drawer}>
           { Items.map((Item) => (<AddCart key={Item.id} Item={Item} />))}
            </List> */}
            <AddCart/>
            <Button variant="contained" className={classes.checkout} href='/checkout'>
                CheckOut
            </Button>
        </Drawer>
        <IconButton  onClick={() => setopenDrawer(!openDrawer)}>
       <ShoppingBasketIcon />
        </IconButton>
        </>
    )
}

export default Cart
