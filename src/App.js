import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/singleproduct" component={ProductDetail} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
