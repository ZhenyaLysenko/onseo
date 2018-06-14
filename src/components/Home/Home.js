import React, {Component} from 'react';
import style from './Home.css';
import ModalWindow from './ModalWindow';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Policy: false
            
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Policy: true
    }
    render() {
        return(
            <div className={"container-fluid " + style.background}>
                <div className={style.content}>
                    <span className={style.blueText}>THE GAMES ARE </span><br />
                    <span className={style.whiteText}>OUR BUSINESS</span>
                </div>
                <div className={style.splace}></div>
                <div className={style.marginTop}>
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className={"row " + style.textCenter}>
                                <div className={"col-lg-4 col-md-4 " + style.textLeft}>
                                    <span className={style.colorSilver}>Contacts: </span>
                                    <a className={style.colorSilver} href="mailto:contact@onseo.biz">contact@onseo.biz</a>
                                </div>
                                <div className={"col-lg-4 col-md-4 " + style.textLeft}>
                                    <span className={style.colorSilver}>Tel.: +380 432 550514</span>
                                    <span className={style.colorSilver + " " + style.displayBlock}>Fax.: +380 432 550513</span>
                                </div>
                                <div className={"col-lg-4 col-md-4 " + style.textLeft}>
                                    <span className={style.colorSilver + " " + style.marginLeft}>Trident Chambers, 146 Road Town</span><br />
                                    <span className={style.colorSilver + " " + style.marginLeft}>Tortola VG1110, BVI</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className={style.backgroundColorOne + " col-lg-4 col-md-4 "}></div>
                                <div className={style.backgroundColorTwo + " col-lg-4 col-md-4 "}></div>
                                <div className={style.backgroundColorThee + " col-lg-4 col-md-4 "}></div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-12">
                            <ModalWindow />
                        </div>
                    </div> 
                </div>
            </div>);
    }
}

export default Home;