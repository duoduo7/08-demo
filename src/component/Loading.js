import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Loading extends React.Component {
  render () {
    return(
    <div style={{textAlign:'center'}}>
       加载中
       <CircularProgress />
    </div>
    )
  }
}

export default Loading;
