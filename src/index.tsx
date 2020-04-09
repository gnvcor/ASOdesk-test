import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './scaffold/store'
import App from './containers/App'

const target = document.querySelector('#root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    target,
)
