import { useRoutes, Navigate } from "react-router" ;
import AllProducts from "../pages/AllProducts" ;
import AllUsersCarts from "../pages/AllUsersCarts" ;
import SingleProduct from "../pages/SingleProduct" ;

function Routes() {

  let element = useRoutes([
    { path: "products", element: <AllProducts /> },
    { path: "products/:id", element: <SingleProduct /> },
    { path: "carts", element: <AllUsersCarts /> },
    { path: "*", element: <Navigate to={"products/1"} /> }
  ]) 

  return element ;
}

export default Routes;
