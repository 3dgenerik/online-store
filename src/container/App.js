import React from 'react';
import './App.css';
import { Homepage } from '../components/homepage/homepage.component.jsx';
import Shop from '../components/shop/shop.component';
import Header from '../header/header.component';
import 'tachyons';
import {Switch, Route} from 'react-router-dom';



// const HatsPage = (props) => {
//   const params = props.match.params;
//   const val = Object.values(params);
//   return (
//     <div>
//       <Link to = '/'>
//         <button className = 'ma3 pa3 ba br3 pointer grow b--dark-blue bw1 bg-light-blue white'>To home</button>
//       </Link>
//       <h1>HATS PAGE {val}</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/shop' component = {Shop}/>
      </Switch>
    </div>
  )
}

export default App;
