import React, { Component } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from '../reducers'
import App from '../components/App'

let store = createStore(todoApp)

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
