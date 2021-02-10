import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Home from './Home';
import Orders from './Orders';

class App extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/orders">Ordering history</Nav.Link>
                    <Nav.Link href="/cart" className="float-right">
                        <FontAwesomeIcon icon={faShoppingCart} /><i id="items" style={{color: "red"}}></i>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <br></br>
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/orders" exact component={ Orders } />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))