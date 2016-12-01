import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';

class About extends React.Component {
  constructor(){
    super();
    this.state = {
      data:{},
      wait:0
      //0就是还没所搜　　１的时候是所搜正在等待后台响应。２的时候的数据接受完。
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
     let value = this.refs.gitname.getValue();
     axios.get(`https://api.github.com/users/${value}`)
     .then( res=>  this.setState({data:res.data,wait:2}) )
     .catch( error => { alert(error);this.setState({ wait:0 })} )
    this.refs.form.reset();
  }

  render () {
　　let showGitinfo = this.state.wait==0 ? null :
    this.state.wait ==1 ? <Loading /> : <ShowGit gitInfo={this.state.data} />

    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form  ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="github usersname"  underlineFocusStyle={{borderColor:'red'}}/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="Search" secondary={true}  style={{marginLeft:'10px'}}/>
          </form>
           {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
