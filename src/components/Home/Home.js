import React, {Component} from 'react';
import style from './Home.css';
import {Grid, Row, Col} from 'react-bootstrap';


class Home extends Component {
    render() {
        return(
            <div className={style.background}>
                <div className={style.content}>
                    <span className={style.blueText}>THE GAMES ARE </span><br />
                    <span className={style.whiteText}>OUR BUSINESS</span>
                </div>
            </div>
        );
    }
}

export default Home;