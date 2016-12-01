import React from 'react';


class ShowGit extends React.Component {

  render () {
    // console.log(this.props.gitInfo);
    let info = this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow:'rgab(0,0,0,0.25) 0px 3px 10px'
      }
    }
    return(
      <div>
         <img src={info.avatar_url} style={styles.img}/>
         <p>{info.login}</p>
         <div className='show-git'>
           <p>followers <br />{info.followers+100}</p>
           <p>following <br />{info.following+100}</p>
           <p>public_repos <br />{info.public_repos+100}</p>
         </div>
      </div>
    )
  }
}

export default ShowGit;
