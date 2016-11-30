import React from 'react';
import Son from './Son';

class Father extends React.Component {
  render () {
    return(
      <div>
       父亲 {this.context.color}
       <Son />
      </div>
    )
  }
}
Father.contextTypes = {
  color: React.PropTypes.string
};


export default Father;Father
