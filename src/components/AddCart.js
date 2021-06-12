// const Task = ({ Item}) => {
//   return (
//     <div   >
//       <h3>
//         {Item.text}

//       </h3>
//       <p>{task.day}</p>
//     </div>
//   );
// };

// export default Task;

// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   details: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   content: {
//     flex: "1 0 auto",
//   },
//   cover: {
//     width: '20vw',
//     height:'25vh',
//     aspectRatio: 135 / 76,
//   },
  
// }));

// export default function MediaControlCard({Item}) {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.root}>
//         <CardMedia
//         className={classes.cover}
//         image={Item.img}
//         title="Live from space album cover"
//       />
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
           
//           <Typography component="h5" variant="h5">
//             {Item.title}
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             {Item.description}
//           </Typography>
//         </CardContent>
//       </div>
      
//     </Card>
//   );
// }
import {React,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import product1 from "../Assets/Products/product1.jpg";
import product2 from "../Assets/Products/product2.jpg";
import product3 from "../Assets/Products/product3.jpg";
import product4 from "../Assets/Products/product4.jpg";
import product5 from "../Assets/Products/product5.jpg";
import product6 from "../Assets/Products/product6.jpg";
import product7 from "../Assets/Products/product7.jpg";
import product8 from "../Assets/Products/product8.jpg";
import product9 from "../Assets/Products/product9.jpeg";


const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
  images:{
      width:'80px',
      height:'80px'
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];
const Items = ([
    {
      id: 1,
      img: product1,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 2,
      img: product2,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 3,
      img: product3,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 4,
      img: product4,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 5,
      img: product5,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 6,
      img: product6,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 7,
      img: product7,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 8,
      img: product8,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
    {
      id: 9,
      img: product9,
      title: "hgvhgc",
      description: "vghcg",
      price:200,
      priceRow:{priceRow}
    },
  ]);

const invoiceSubtotal = subtotal(Items);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable({Item}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Items.map((Item) => (
            <TableRow key={Item.id}>
              <TableCell><img  src={Item.img} className={classes.images} />{Item.title}</TableCell>
              <TableCell align="right">{Item.qty}</TableCell>
              <TableCell align="right">{Item.unit}</TableCell>
              <TableCell align="right">{ccyFormat(Item.price)}</TableCell>
            </TableRow>
           ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
