import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import App from './components/App/App';
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render((<HashRouter>
  <App/>
</HashRouter>), document.getElementById('root'));
