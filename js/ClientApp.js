var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

// This is an instance of the class
var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'use props everywhere', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'props are the best', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
