import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import ProductList from "./components/productList";
import { ProductDetail } from "./components/ProductDetail";
import "./index.css";

function App() {
  return (
    <>
      <Link className="" to="/">
        Product List
      </Link>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/productdetail/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
