import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage'
import DependencyList from './DependencyList'

export default () => (

  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/dependencies" component={DependencyList} />
  </div>
)
