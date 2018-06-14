import style from "./Contacts.css";
import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        return(
            <div className={style.marginTop}>
              <div className={style.contacts}>
                <h1 className={style.contacts__big_sign}>CONTACTS</h1>
                <h1 className={style.contacts__small_sign}>CONTACTS</h1>
              </div>
              <div className={style.contact_container}>
                <div className={style.content}>
                  <div className={style.content__item}>
                    <h2 className={style.content__item_h2}>
                      Main development office<br/>
                      located in Vinnitsa, Ukraine
                    </h2>
                    <div>
                      <div className={style.content__phone_item}>
                        <span className={style.content__phone_item_f}>Phone:</span><br/>
                        <span className={style.content__phone_item_s}>+380 432 550514</span>
                      </div>
                      <div className={style.content__phone_item}>
                        <span className={style.content__phone_item_f}>Fax:</span><br/>
                        <span className={style.content__phone_item_s}>+380 432 550513</span>
                      </div>
                      <div className={style.content__phone_item}>
                        <span className={style.content__phone_item_f}>Email:</span><br/>
                        <span className={style.content__phone_item_s + ' ' + style.content__phone_item_email}><a href="#">contact@onseo.biz</a></span>
                      </div>
                    </div>
                  </div>
                  <div className={style.footer}>
                    <div className={style.copyright}>
                      <i className="fa fa-copyright"></i>
                      <span className={style.copyright_sign}>Onseo 2018</span>
                    </div>
                      <div className={style.item}>
                        <span className={style.text}>Follow us</span>
                        <i className={"fa" + " " + "fa-facebook" +  " " + style.myLink}></i>
                        <i className={"fa" + " " + "fa-twitter" +  " " + style.myLink}></i>
                        <i className={"fa" + " " + "fa-youtube" +  " " + style.myLink}></i>
                        <i className={"fa" + " " + "fa-instagram" +  " " + style.myLink}></i>
                        <i className={"fa" + " " + "fa-linkedin" +  " " + style.myLink}></i>
                      </div>
                  </div>
                </div>
                <div className={style.cmap}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6318802.8171865055!2d27.54205415357118!3d49.21998597539287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1527169398703"></iframe>
                </div>
              </div>
              <div className={style.footer2}>
                <div className={style.copyright}>
                  <i className="fa fa-copyright"></i>
                  <span className={style.copyright_sign}>Onseo 2017</span>
                </div>
                <div className={style.item}>
                  <span className={style.text}>Follow us</span>
                  <i className={"fa" + " " + "fa-facebook" +  " " + style.myLink}></i>
                  <i className={"fa" + " " + "fa-twitter" +  " " + style.myLink}></i>
                  <i className={"fa" + " " + "fa-youtube" +  " " + style.myLink}></i>
                  <i className={"fa" + " " + "fa-instagram" +  " " + style.myLink}></i>
                  <i className={"fa" + " " + "fa-linkedin" +  " " + style.myLink}></i>
                </div>
              </div>
              {/* <div className={style.blue_square}></div> */}
            </div>
        );
    }
}

export default Contacts;
