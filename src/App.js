import React from 'react';
import './style.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
ItemDetail;
import Shop from './components/ItemDetail';

export default function App() {
  return (
    // wrap all elements with BrowserRouter
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop./:id" component={ItemDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);
