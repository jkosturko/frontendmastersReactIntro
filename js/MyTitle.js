var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

// creating a new type of component (like creating div)
var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

module.exports = MyTitle
