import React from 'react'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
      )
}

export default App;