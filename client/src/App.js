import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from './routers';
import Home from './pages/Home'
import Login from './Components/login/login'
class App extends Component {
  

  render () {
    return (
      <Router>
          
            <Switch>
              
              <Route path='/home'><Home /></Route>
              <Route path='/'><Login/></Route>
            </Switch>
         
      </Router>
    )
  }
}

export default App;