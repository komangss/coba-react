// import a couple of object from react modules
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello World</h1>;
// this element will compiled by bible to :
// React.createElement
//  im gonna render this to real DOM (thats why we import ReactDOM)

console.log(element);

// we are gonna render it to #root in public/index.html whic thats are our container
ReactDOM.render(element, document.getElementById('root'))