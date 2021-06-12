
import { React, useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import Product from './Product'
import{ Grid ,Box,} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  center:{
    display:'flex',
    justifyContent:'center',
    marginTop:"12vh"
    
  }
})


 

const Products = () => {
  const { id } = useParams()
  const url = `http://localhost:5000/cards/`;
  const [cards, setCards] = useState(null)

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCards(response.data);
    });
  }, [url]);
  
  const classes = useStyles();

  if (cards) {
    return (content = (
      <>
      
        <Box display='flex'>
        <Grid container spacing={5} className={classes.center} >
            
            {cards.map((card,id) => {
                return(
                   <Grid key={id} item> <Product  {...card}/> </Grid>
                )
              }
            )
            }
            
        </Grid>
        </Box>
        </>
    ));
  }


    return (
      <>
      {content}
        </>
    )
}

export default Products
