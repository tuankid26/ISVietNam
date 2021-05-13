import React, { Component } from 'react';
import { BrowserRouter as  Route, Router, Switch } from "react-router-dom";
// import routes from './routers';
import Home from './pages/Home'
import Login from './Components/login/login'
import Place from './pages/Place'
import Hotel from './pages/Hotel'
import Location from './pages/Location'
class App extends Component {
  

  render () {
    return (
      // <Home/>
      <Router>
          
            <Switch>
              
              <Route path='/home' exact Component= {Home}></Route>
              <Route path='/' exact Component = {Login}></Route>
            </Switch>
         
      </Router>
    
    )
  }
}

export default App;