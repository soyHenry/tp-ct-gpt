import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Productos from './Productos';
import DetallesProducto from './DetallesProducto';
import RandomColor from '../01/RandomColor';

import styles from "./App.module.css"

const App = () => {
  return (
    <Router>
      <nav className={styles.nav} > 
        <ul className={styles.myList}>
          <li>
            <Link to="/" className={styles.link} >Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className={styles.link}>Productos</Link>
          </li>

          <li>
            <Link to="/randomColor" className={styles.link}>Random Color</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/randomColor" component={RandomColor } />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/productos/:id" component={DetallesProducto} />
      </Switch>
    </Router>
  );
};

export default App;
