import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';


class App extends React.Component {
  render () {
    return(
      <div>
       <NavHeader />
       {this.props.children}


      <NavFooter />
      </div>
  　
    )
  }
}

export default App;
