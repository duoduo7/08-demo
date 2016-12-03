import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
       <div className='home-cover'>
        <div className='home-item'>
          <h3>HI,I'M DuoDuo</h3>
          <p>WEB DEVELOPER</p>
          <button type="button" className="btn btn-danger">
          <a href="http://sports.qq.com/nba/" style={{color:'#fff'}}>  HIRE ME </a>
          </button>
         </div>
       </div>
     </div>
    )
  }
}

export default Home;
