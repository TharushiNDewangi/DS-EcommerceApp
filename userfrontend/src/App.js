import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import CartPage from './containers/CartPage';
import ProductListPage from './containers/ProductListPage/index';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CheckoutPage from './containers/CheckoutPage/index';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';



function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

//routes
   return (
    <div className="App">
    <Router>
    <Switch>
      <Route path="/" exact component = {HomePage}></Route>
      <Route path="/cart"  component = {CartPage}></Route>
      <Route path="/checkout" component={CheckoutPage}></Route>
      <Route path="/:productslug/:productid/p"  component = {ProductDetailsPage}></Route> 
      <Route path="/:slug"  component = {ProductListPage}></Route>
     
      
     
    </Switch>
  </Router> 
  </div>
  );
}

export default App;
