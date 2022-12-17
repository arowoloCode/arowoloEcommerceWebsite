import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../utils";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAccessToken() ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoutes;
