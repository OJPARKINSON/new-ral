
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './Shop.js'
import Cart from './components/Cart'
import Home from './Home';
import FAQ from './FAQ';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/FAQ" component={FAQ}/>
                  </Switch>
             </div>
       </BrowserRouter>
    );
  }
}

export default App;