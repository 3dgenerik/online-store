import React from 'react';
import './App.css';
import { Homepage } from '../components/homepage/homepage.component.jsx';
import 'tachyons';
import {Switch, Route, Link} from 'react-router-dom';


const HatsPage = (props) => {
  const params = props.match.params;
  const val = Object.values(params);
  return (
    <div>
      <Link to = '/'>
        <button className = 'ma3 pa3 ba br3 pointer grow b--dark-blue bw1 bg-light-blue white'>To home</button>
      </Link>
      <h1>HATS PAGE {val}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/shop/hats' component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
