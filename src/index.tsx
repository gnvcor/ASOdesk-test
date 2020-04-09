import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

const target = document.querySelector('#root')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    target,
)
