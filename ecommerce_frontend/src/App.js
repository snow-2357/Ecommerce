import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Comps/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OneProduct from "./Pages/OneProduct";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Comps/Footer";
//import { loginStart, loginSuccess , loginFailure} from './redux/userSlice'
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Container>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
          <Home user={user} />
            {/* {user ? <Home user={user} /> : <Login />} */}
          </Route>
          <Route path="/cart">{user ? <Cart user={user} /> : <Login />}</Route>
          {/* <Route path="/cart"> <Cart /> </Route> */}
          <Route path="/allproducts">
            <ProductsPage />
          </Route>
          <Route path="/deal/:id">
            <OneProduct />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
        </Switch>
        <div style={{ position: "relative", top:"calc(100vh - 820px)" }}>
          <Footer />
        </div>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
