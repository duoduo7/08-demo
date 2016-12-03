import React from 'react';


import BlogCard from '../component/BlogCard';
let data=[
    {index:1,title:'hello',desc:'world'},
    {index:2,title:'hello',desc:'world1'},
    {index:3,title:'hello',desc:'world2'},
    {index:4,title:'hello',desc:'world3'},
    {index:5,title:'hello',desc:'world4'}

]
class Blog extends React.Component {
  render () {
    let cards = data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className='blog-wrap'>

       {cards}
      </div>
    )
  }
}

export default Blog;
