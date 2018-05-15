import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import style from './App.css';
import About from './../About/About';
import WhatWeDo from './../WhatWeDo/WhatWeDo';

class App extends Component {
  render() {
    return (
      <div>
        <header>

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>           
          </ul>
          {/*
          тут буде меню, лого і пошук. Оскільни на кожній сторінці вони не змінні.
          хотя на Home фон повинен покривати header хзхз
          */
          }
        </header>
        <Switch>
          <Route exact path="/" component={WhatWeDo}/>
          <Route exact path="/about" component={About}/>
          {/*<Route path="/how-we-do" component={WhatWeDo}/> 
          <Route path="/contacts" component={Contacts}/>          
          <Route path="/vacancies" component={Vacancies}/>
          <Route path="/who-trust-us" component={WhoTrustUs}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
