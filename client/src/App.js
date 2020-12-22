import React from 'react';
import "./App.css";
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/layout/Home";
import MensWear from "./components/pages/MensWear"
import KidsWear from "./components/pages/KidsWear"
import WomenWear from "./components/pages/WomenWear"
import Upload from "./components/pages/Upload"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import Alert from "./components/layout/Alert"
import Footer from './components/layout/Footer';
import {Provider} from "react-redux";
import { store } from './redux/store';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
      <Navbar /> 
      <div className="container">
        <Alert />
      </div>
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route exact path= "/men" component={MensWear} />
        <Route exact path= "/kid" component={KidsWear} />
        <Route exact path= "/women" component={WomenWear} />
        <Route exact path= "/upload" component={Upload} />
        <Route exact path= "/register" component={Register} />
        <Route exact path= "/login" component={Login} />
      </Switch>
      {/* <Footer /> */}
    </Router>
    </Provider>
    
    </div>
  );
}

export default App;
