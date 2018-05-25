import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import style from './App.css';
import Header from '../header/Header';
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import { injectGlobal } from 'styled-components';
import myFont from '../../../public/fonts/BebasNenueBold.ttf';

injectGlobal`
  @font-face {
    font-family: 'BebasNenuBold';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <Route exact path="/" component={Home}/>
        <Route path="/WhatWeDo" component={WhatWeDo}/>
        <Route path="/contacts" component={Contacts}/>

      </div>
    );
  }
}

export default App;
