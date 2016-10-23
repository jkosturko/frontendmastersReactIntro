var React = require('react')

// creating a new type of component (like creating div)
var MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color}

    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
