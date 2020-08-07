import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Component
// State
// Lifecycle
// UI

//Define the component
class App extends React.Component {
  render() {
    return (
      <div>
        <Popular/>        
      </div>
      )
    }
  }

  // react element
  // and WHERE component will be rendered
  // react dom renders to dom environment
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )