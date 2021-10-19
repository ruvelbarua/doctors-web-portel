import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signout from './components/Signout/Signout';
import Registration from './components/Register/Register';
import Doctors from './components/Doctors/Doctors'
import Authprovider from './components/Context/Authprovider';
import PrivateRoute from './components/Private/PrivateRoute';
import Nurses from './components/Nurses/Nurses';
import Services from './components/Services/Services';


function App() {
  return (
    <>
      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path="/service">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/nurses">
              <Nurses></Nurses>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signout">
              <Signout></Signout>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/notfound">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </Authprovider>
    </>
  );
}

export default App;
