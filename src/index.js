import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import initialState from './state/initialState'
import reducer from './reducer'
import './styles/index.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers())

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)

