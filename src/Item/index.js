import React from 'react';

class Item extends React.Component {
  render () {
    let context = this.props.params.title==0 ? '这是第一个页面':
    this.props.params.title == 1 ? '这是第二个页面':
    this.props.params.title == 2 ? '这是第三个页面': '这是第ｎ个页面';
    return(
    <div>
      {context}
    </div>
    )
  }
}

export default Item;
