import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import WhatWeDo from "./WhatWeDo";
import style from './App.css';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <header>
          {/*
          тут буде меню, лого і пошук. Оскільни на кожній сторінці вони не змінні.
          хотя на Home фон повинен покривати header хзхз
          */
          }
        </header>

        {/*
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/how-we-do" component={HowWeDo}/>
        <Route path="/vacancies" component={Vacancies}/>
        <Route path="/who-trust-us" component={WhoTrustUs}/>
        */
        }
      </div>
    </BrowserRouter>);
  }
}

export default App;
