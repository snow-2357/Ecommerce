import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
// import styled from "styled-components";
// import OneProduct from "./Pages/OneProduct";
import Navbar from './Comps/Navbar';
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useSelector, useDispatch } from 'react-redux'
//import { loginStart, loginSuccess , loginFailure} from './redux/userSlice'
function App() {
  
  const user=useSelector((state)=>state.user.currentUser)
  // const dispatch = useDispatch()
  return (
    <Router>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
        {user ? <Home user={user}/> : <Login />}
        </Route>
        <Route path="/cart">
        {user ? <Cart user={user}/> : <Login />}
        </Route>
        <Route path="/allproducts">
          <ProductsPage />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>
      </Switch>
    </Router>
  );
}

export default App;

// const Container=styled.div`
//   position: relative;
// `;
