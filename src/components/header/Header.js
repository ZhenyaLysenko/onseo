import React, {Component} from 'react';
import Scroll from 'react-scroll';
import Popup from 'reactjs-popup';
import style from './Header.css';
import iconOnseo from "../../../public/header/Onseo_Etalon.png"

var Link = Scroll.Link;

const contentStyle = {
  background: "rgba(255,255,255,0.9)",
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
                        <li>
                          <Link onClick={close}
                            activeClass="active"
                            to="Home"
                            offset={-75}
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            Home
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link onClick={close}
                            activeClass="active"
                            to="About"
                            offset={-75}
                            spy={true}
                            smooth={true}
                            duration={500}>
                            About
                          </Link>
                        </li>
                          <hr />
                          <li>
                          <Link onClick={close}
                            activeClass="active"
                            to="WhoTrustUs"
                            offset={-25}
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Who trust us
                          </Link>
                        </li>
                        <hr />
                          <li>
                            <Link onClick={close}
                              activeClass="active"
                              to="WhatWeDo"
                              spy={true}
                              smooth={true}
                              duration={500}>
                              What we do
                            </Link>
                          </li>
                          <hr />
                          <li>
                            <Link onClick={close}
                                  activeClass="active"
                                  to="HowWeDo"
                                  offset={-25}
                                  spy={true}
                                  smooth={true}
                                  duration={500}>
                                  How we do
                            </Link>
                          </li>
                          {/* <hr />
                          <li onClick={close}>
                              <Link to="/who-trust-us">Who trust us</Link>
                          </li> */}
                          <hr />
                          <li onClick={close}>
                              <Link onClick={close}
                                activeClass="active"
                                to="Vacansies"
                                offset={-25}
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Vacancies
                              </Link>
                          </li>
                          <hr />
                          <li onClick={close}>
                            <Link onClick={close}
                              activeClass="active"
                              to="Contacts"
                              offset={-75}
                              spy={true}
                              smooth={true}
                              duration={500}>
                              Contacts
                            </Link>
                          </li>
                      </ul>
                    </div>}
                </Popup>
            </div>
            <div className={"col-4" + " " + style.textCenter}>
                    <a href="#">
                      <img className={style.Brand} src={iconOnseo} alt="Onseo" />
                    </a>

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
                      <div className={style.searchAnimation}>
                        <a onClick={this.handleSearch}>
                          <i className={"fa fa-angle-right" + " " + style.circleRight}></i>
                        </a>
                        <form>
                          <input ref={input => input && input.focus()} onChange={this.handleChange} className={style.SearchField} value={this.state.value} type="text" placeholder="Search..." />
                        </form>
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
