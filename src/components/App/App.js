import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './App.css';
import WhatWeDo from '../WhatWeDo/WhatWeDo'

const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
)

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)


class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <header>
          {/*
          тут буде меню, лого і пошук. Оскільни на кожній сторінці вони не змінні.
          хотя на Home фон повинен покривати header хзхз

          Щоб добавити лінк можна писати
          <Link to="/about">About</Link>
          */

          }
        </header>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={WhatWeDo}/>

      </div>
    </BrowserRouter>);
  }
}

export default App;
