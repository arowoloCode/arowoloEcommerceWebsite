import "./App.css";
// import Twitter from "./components/Twitter";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import User from "./User";
import PublicRoutes from "./routes/PublicRoutes";
// import Facebook from "./components/Facebook";
// import PrivateRoutes from "./routes/PrivateRoutes";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
// import Cloudinary from "./components/Cloudinary";
// import Flutterwave from "./components/Flutterwave";
// import Playgroud from "./components/Playgroud";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div className='bg-gray-50 text-gray-800'>
      <Router>
        <Header />
        <Switch>
          <PublicRoutes exact path='/' component={Home} />
          {/* <PrivateRoutes exact path='/dashboard' component={User} /> */}
          {/* <PublicRoutes exact path='/register' restricted component={Twitter} />
          {/* <PublicRoutes exact path='/login' restricted component={Facebook} /> */}
          {/* <PublicRoutes exact path='/cloud' component={Cloudinary} /> */}
          {/* <PublicRoutes exact path='/payment' component={Flutterwave} /> */}
          {/* <PublicRoutes exact path='/play' component={Playgroud} /> */}
          <PublicRoutes exact path='/cart' component={Cart} />
          <PublicRoutes
            exact
            path='/product/:category/:id'
            component={ProductDetails}
          />
          <PublicRoutes component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
