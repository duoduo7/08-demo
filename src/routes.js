import React from 'react';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import About from './About';
import Item from './Item';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Router path='/' component={App}>
         <IndexRoute component={Home}/>
           <Router path='blog' component={Blog}/>
           <Router path='work' component={Work}/>
           <Router path='about' component={About}/>
           <Router path='item/:title' component={Item}/>
        </Router>
     </Router>
    )
  }
}

export default Routers;
