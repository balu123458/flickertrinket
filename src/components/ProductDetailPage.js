import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  app: {
    maxWidth: "1200px",
    // width: "100%",
    margin: "100px auto",
    boxShadow: "0 0 5px #ccc",
    // width:'80%'
  },
  details: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "30px 0",
    backgroundColor: "rgba(255, 255, 255,0.5)",
    filter: 'alpha(opacity=60)',
  },

  img: {
    padding: "15px",
    height: "50vh",
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundposition: "center",
  },

  box: {
    maxWidth: "500px",
    minWidth: "290px",
    margin: "25px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
});

const ProductDetailPage = () => {
  const classes = useStyles();

  const { id } = useParams();
  const url = `http://localhost:5000/cards/${id}`;
  const [card, setCard] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCard(response.data);
    });
  }, [url]);

  if (card) {
    return (content = (
      <>
     
        <div className={classes.app}>
          <div className={classes.details}>
            <div>
              <img
                className={classes.img}
                src={card.imageUrl}
                alt={card.name}
              />
            </div>

            <div className={classes.box}>
              <div className={classes.row}>
                <h2>{card.title}</h2>
                <span>${card.price}</span>
              </div>

              <p>{card.description}</p>

              {/* <DetailsThumb
            images={item.src}
            tab={this.handleTab}
            myRef={this.myRef}
          /> */}
              <button className="cart">Add to cart</button>
            </div>
          </div>
        </div>
      </>
    ));
  }
  return <div>{content}</div>;
};

export default ProductDetailPage;
