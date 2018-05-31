import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import style from './Header.css';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import iconOnseo from "../../../public/header/Onseo_Etalon.png"

const contentStyle = {
  background: "rgba(255,255,255,0.6)",
  borderRadius: "0 10px 10px 0",
  width: "25%",
  height: "100%",
  border: "none",
  marginLeft: "0",
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      search: false,
      open: true,
      value: ""
    }
    this.showMenu = this.showMenu.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSearch(e) {
    console.log(this.state.value);
    this.setState({
      value: ""
    });
  }
  handleClickSearch() {
    event.preventDefault();
    this.setState({ search: !this.state.search });
  }
  showMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    return (
      <div className={style.AppHeader}>
      <div className="row">
            <div className="col-4">
                <Popup modal contentStyle={contentStyle} closeOnDocumentClick={true}
                  trigger={ open =>
                    <div className={open ? style.burgerMenuOpen : style.burgerMenu }>
                      <div className={style.bar1} key="b1" />
                      <div className={style.bar2} key="b2" />
                      <div className={style.bar3} key="b3" />
                    </div>
                  }>
                  {close =>
                    <div className={style.menu}>
                      <ul>
                      <li onClick={close}>
                              <Link to="/">Home</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/About">About</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/what-we-do">What we do</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/HowWeDo">How we do</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/who-trust-us">Who trust us</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/">Vacancies</Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                              <Link to="/Contacts">Contacts</Link>
                          </li>
                          <hr />
                      </ul>
                    </div>}
                </Popup>
            </div>
            <div className={"col-4" + " " + style.textCenter}>
                <img className={style.Brand} src={iconOnseo} alt="Onseo" />
            </div>
            <div className="col-1">
              <div className={style.search}>
                <a onClick={this.handleClickSearch} className="search">
                  <i className={"fa fa-search fa-lg"+ " " + style.blueColor}></i>
                </a>
              </div>
            </div>
            <div className="col-3">
              <div >
              {this.state.search ?
                    (
                      <div>
                        <a onClick={this.handleSearch}>
                          <i className={"fa fa-angle-right" + " " + style.circleRight}></i>
                        </a>
                        <input onChange={this.handleChange} className={style.SearchField} value={this.state.value} type="text" placeholder="Search..." />
                      </div>
                    ) :
                    (
                      null
                    )
                  }
            </div>
          </div>
        </div>
      </div>);
  }
}
export default Header;
