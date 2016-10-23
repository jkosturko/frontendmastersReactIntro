var div = React.DOM.div
var h1 = React.DOM.h1

// creating a new type of component (like creating div)
var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1({style: { color: this.props.color}}, this.props.title)
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

// This is an instance of the class
var MyFirstComponent = (
 	div(null, 
 		MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
 		React.createElement(MyTitle, {title: "use props everywhere", color: 'mediumaquamarine'}),
 		ce(MyTitle, {title: 'props are the best', color: 'peru'})
 	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))