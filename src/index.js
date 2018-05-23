import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'
import { translationLanguages, translations } from './config'
import { initialize, addTranslation } from 'react-localize-redux'
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(logger));

const defaultLanguage = localStorage.getItem('language') || translationLanguages[0];
store.dispatch(initialize(translationLanguages, { defaultLanguage }));
store.dispatch(addTranslation(translations));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
