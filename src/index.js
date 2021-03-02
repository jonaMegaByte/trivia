import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import initialState from './state/initialState'
import reducer from './reducer'
import './styles/index.scss'

const store = createStore(reducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)

