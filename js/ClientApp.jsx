var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

  // This is an instance of the class
  // This is when you are just returning 
  // something (when you get rid of the { } the function assumes straight return)
var MyFirstComponent = () => (
  <div>
    <MyTitle title='Whatevs' color='rebeccapurple' />
    <MyTitle title='LOL' color='papayawhip' />
    <MyTitle title='WHAOOOA' color='#f06d06' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
