import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import AboutUs from "./components/About";
import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core";
import background from "./Assets/background.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import Checkoutform from "./components/Checkoutform";
import ProductDetailPage from "./components/ProductDetailPage";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${background})`,
    // width:'100vw',
    // height:'100vh',
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  footer: {
    position: "sticky",
    top: "100%",
  },
  nav: {
    display: "none",
  },
});

const App = () => {
  const location = useLocation();
   console.log(location)
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {location.pathname !== "/" ? <Navbar/> : ''}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkoutform} />
          <Route
            exact
            path="/productdetailpage/:id"
            component={ProductDetailPage}
          />
          <Redirect to="/" />
        </Switch>
      
      <Footer />
    </div>
  );
};

export default App;
