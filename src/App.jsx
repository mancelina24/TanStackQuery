import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import ProductList from "./components/productList";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <>
      <Link to="/">Product List</Link>
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
