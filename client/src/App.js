
import Home from './pages/Home'
import Login from './Components/login/login'
import Place from './pages/Place'
import Hotel from './pages/Hotel'
import Location from './pages/Location'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import News from './pages/News'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component= {Home}></Route>
        <Route path="/login" component= {Login}></Route>
        <Route path="/news" component= {News}></Route>
        <Route path="/place"  component= {Place}></Route>
        <Route path="/hotel/:id"  component= {Hotel}></Route>
        <Route path="/location"  component= {Location}></Route>
      </Switch>
    </Router>
  )
}