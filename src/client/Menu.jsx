import React from 'react'

import { Link } from 'react-router-dom'

export default () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dependencies">Dependencies</Link></li>
    </ul>
  </div>
)
