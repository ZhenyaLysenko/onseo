import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import style from './App.css';
import Header from '../header/Header';
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import WhoTrustUs from '../WhoTrustUs/WhoTrustUs';
import { injectGlobal } from 'styled-components';
import myFont from '../../../public/fonts/BebasNeueBold.ttf';



class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <Route exact path="/" component={Home}/>
        <Route path="/what-we-do" component={WhatWeDo}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/about" component={About}/>
        <Route path="/who-trust-us" component={WhoTrustUs}/>
      </div>
    );
  }
}

export default App;
