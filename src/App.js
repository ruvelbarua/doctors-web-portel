import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Registration from './components/Register/Register';
import Doctors from './components/Doctors/Doctors'
import PrivateRoute from './components/PrivateRout/PrivateRoute';
import Nurses from './components/Nurses/Nurses';
import Service from './components/Service/Service';
import Services from './components/Services/Services';
import About from './components/About/About';
import AuthProvider from './components/Context/AuthProvider';
import Logout from './components/Logout/Logout'


function App() {
  return (
    <>
      <AuthProvider>
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
            <PrivateRoute exact path="/">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="/nurses">
              <Nurses></Nurses>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/logout">
              <Logout></Logout>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
