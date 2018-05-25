import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import style from './App.css';
import Header from '../header/Header';
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <header>
          <Header></Header>
        </header>
        <Route exact path="/" component={Home}/>
        <Route path="/WhatWeDo" component={WhatWeDo}/>
        <Route path="/contacts" component={Contacts}/>

      </div>
    </BrowserRouter>);
  }
}

export default App;
