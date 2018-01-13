import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import Routes from './Routes'

const AppContainer = () => (
  <div id="appContainer">
    <Router>
      <div>
        <App />
        <Routes />
      </div>
    </Router>
  </div>
)

const render = () => {
  ReactDOM.render(<AppContainer />, document.getElementById('react-root'))
}

render()
