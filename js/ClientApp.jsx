const React = require('react')
const ReactDOM = require('react-dom')

  // This is an instance of the class
const App = () => (
  <div className='app-container'>
    <div className="home-info">
      <h1 className="title">svideo</h1>
      <input type="text" className="search" placeholder="Search"/>
      <button className="browse-all">or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
