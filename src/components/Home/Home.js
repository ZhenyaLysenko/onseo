import React, {Component} from 'react';
import style from './Home.css';
import {Grid, Row, Col} from 'react-bootstrap';


class Home extends Component {
    render() {
        return(
            <div className={style.background}>
                <div className={style.content}>
                    <h1 className={style.blueText}>THE GAMES ARE </h1>
                    <h1 className={style.whiteText}>OUR BUSINESS</h1>
                </div>
            </div>
        );
    }
}

export default Home;