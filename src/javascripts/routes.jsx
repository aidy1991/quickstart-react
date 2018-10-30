import '@babel/polyfill';
/* eslint import/no-extraneous-dependencies: off */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import rootStyles from '../stylesheets/index.css';

const rootNode = document.createElement('div');
rootNode.className = rootStyles.root;
document.body.appendChild(rootNode);

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <App />
    </AppContainer>
  ), rootNode);
};

render();

if (module.hot) {
  module.hot.accept('./components/App', render);
}
