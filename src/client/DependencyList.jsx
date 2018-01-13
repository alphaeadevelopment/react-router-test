import React from 'react'

import packageJson from '../../package.json'

export default () => {
  return (
    <div>
      <h1>Dependencies</h1>
      <table>
        <thead><tr><th>Package</th><th>Version</th></tr></thead>
        <tbody>
          {Object.keys(packageJson.dependencies).map((dep) => (
            <tr key={dep}><td>{dep}</td><td>{packageJson.dependencies[dep]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
