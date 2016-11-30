import React from 'react';

class NavHeader extends React.Component {
  constructor(){
    super();
    this.state={title:'Home'}
  }

  handleBack(){
    this.context.router.goBack();
  }
  conponentWillMount(){
    this.setState({
      title:this.context.router.isActive('/',true)? 'Home':
            this.context.router.isActive('blog')? 'Blog':
            this.context.router.isActive('work')? 'Work':'About'
    })
  }
  render () {
    // console.log(this.context.router.isActive('./blog'))

    return(

      <div className='nav-header'>
        <button type="button"  onClick={this.handleBack.bind(this)} aria-label="Left Align">
          <span className="glyphicon glyphicon-menu-left"
            aria-hidden="true"></span>BACK
        </button>
        <h3>DUODUO7@{this.props.title}</h3>
        <button type="button"  aria-label="Left Align">
          <span className="glyphicon glyphicon-remove-circle"
            aria-hidden="true"></span>
        </button>
      </div>
  　
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object
};


export default NavHeader;
