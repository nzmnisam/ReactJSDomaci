import React from 'react'
import Navbar from './Shared/Navbar'
import Home from './Home/Home'



import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Services from './Services/Services'
import Products from './Products/Products'
import SignUp from './SignUp/SignUp'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
          <Navbar Title="React Static"/>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/Services" component={Services}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Sign-up" component={SignUp}/>
          </Switch>
      </Router>  
    </>
  )
}

export default App
