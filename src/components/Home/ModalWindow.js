import React, {Component} from "react";
import style from './ModalWindow.css';

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(e) {
    if(event.keyCode === 27) {
      if (this.node.contains(e.target)) {
        return;
      }
      this.handleClick();
    }
  }
  handleClick() {
    if (!this.state.show) {
      document.addEventListener('click', this.handleOutsideClick, false);
      document.addEventListener("keydown", this.escFunction, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
      document.removeEventListener("keydown", this.escFunction, false);
    }
    this.setState({
      show: !this.state.show
    });
  }
  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }
  render() {
    return(
      <div>
        <span className={style.colorSilver} onClick={this.handleClick}>Onseo Privacy Policy</span>
        {!this.state.show ? null :
        <div>
          <div className={style.modalOverlay}>
            <div className={style.whiteColor}>
              <div className={style.bar1} key="b1" />
              <div className={style.bar2} key="b2" />
            </div>
          </div>
          <div className={style.modal} ref={node => { this.node = node; }}>
            <div className={style.marginLeft}>
              <h1>Onseo Privacy Policy</h1>
              <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
              <h3>What personal information do we collect?</h3>
              <p>In the course of delivering an ad to you via the Onseo Platform, hereinafter <b>Media Buying System (MBS)</b>, MBS does not intentionally collect information that reveals your real-world identity, such as your name, address, phone number, or Social Security Number. MBS collects data about your computer or device. Data are fetched from bid request created by exchange only. This information is pseudonymous and is not considered to be personal information.</p>
              <p>The information MBS collects includes common information found in every communication sent over the Internet, from which we infer such things as: browser type (e.g., Chrome or Internet Explorer); operating system (e.g., Mac OS or Windows); browser language (e.g., English or Spanish); Internet Protocol (IP) address; Internet Service Provider (e.g., Comcast or Verizon); and mobile advertising identifier (AAID/IDFA), for mobile devices such as smartphones and tablets.</p>
              <p>MBS may also collect data regarding your interactions with our clients and partners, including your use of our clients’ sites and mobile apps, the sites and apps our clients advertise on, and other pages on the Internet. We may also capture additional data in order to calculate a statistical ID, as described below.</p>
              <p>We may also receive Precise Location Data (as defined by the NAI) generated from your use of your mobile device, such as the latitude/longitude coordinates provided by a mobile app publisher or other media supply source in conjunction with the opportunity to purchase advertising inventory. MBS may transfer such Precise Location Data to clients and partners, including for use in targeting ads based on the current location of the device. But we use and share the aggregated information only, information about you and other users collectively, but not specifically identifiable to you.</p>
              <p>We do not knowingly collect data or create data segments that are based upon what we consider to be sensitive information (for example, we don’t create any data segments to determine credit worthiness, for insurance underwriting or similar purposes, nor do we create segments of consumers based on personal data considered to be sensitive, e.g. information about physical or mental health or condition, sexual orientation, race or ethnic origin, political opinions, religious or similar beliefs). Clients may use health-related segments (which are not comprised of sensitive health data) such as an inferred interest in health and wellness or cough medicine and allergy medications.</p>
              <h3>When do we collect information?</h3>
              <p>We collect information from you:</p>
              <p>when you enter information on our site</p>
              <p>from a received bid request generated by an exchange</p>
              <h3>How do we use your information?</h3>
              <p>We and our clients and partners use the information we collect to create data segments, and these data segments are generally based upon your interactions with our clients or other third party media suppliers, such as the websites that you visit and the mobile applications that you use. MBS does not use this data to personally identify you. We also use the information to run analytics, target ads, and measure the effectiveness of ads on behalf of MBS’s clients. It is used to improve our MBS and the products and services that we provide to our clients, and to create new products and services. For these purposes, we may share information with our clients, partners and service providers.</p>
              <h3>How do we protect your information?</h3>
              <p>We do not use vulnerability scanning. We never ask for credit card numbers. We only provide articles and information.</p>
              <p>The collected information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>
              <p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>
              <h3>Cookies</h3>
              <p>We do not use cookies for tracking purposes.</p>
              <h3>Personal Advertising Preferences</h3>
              <p>You may always opt-out or reset Google Advertising ID or apple IDFA.</p>
              <p>In Google Settings of your Android device you should find the Ads category and use “Reset advertising ID” or “Opt out of interest-based ads” buttons to do it.</p>
              <p>On iOS devices, you should go to “Settings”, tap the “Privacy” (in iOS 6 these settings are under the “General” set of controls), next tap on “Advertising” and then tap “Reset Advertising Identifier” or switch the “Limit Ad Tracking” to ON.</p>
              <h3>Third-party disclosure</h3>
              <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>
              <h3>Third-party links</h3>
              <p>We do not include or offer third-party products or services on our website.</p>
              <h3>Google</h3>
              <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a></p>
              <h3>Online Privacy Protection.</h3>
              <p>Users can visit our site anonymously.</p>
              <p>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</p>
              <p>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</p>
              <p>You will be notified via our Privacy Policy page in case of any Privacy Policy changes.</p>
              <p>If you create an account on our website you will be able to change your personal information by logging in to your account</p>
              <h3>Children Online Privacy Protection</h3>
              <p>When it comes to the collection of personal information from children under the age of 13 years old we do not collect such information at all.</p>
              <h3>Fair Information Practices</h3>
              <p>The Fair Information Practices Principles have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
              <p>In order to be in line with Fair Information Practices we will notify the users via in-site notification within 1 business day if a data breach occurs.</p>
              <p>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>
              <h3>AntiSPAM Policy</h3>
              <p>We collect your email address only if you enter it on our web site or send it to us via email. We use your address only in order to send information, respond to inquiries, and/or other requests or questions.</p>
              <h3>We agree to the following:</h3>
              <ul>
                <li>Not use false or misleading subjects or email addresses.</li>
                <li>Identify the message as an advertisement in some reasonable way.</li>
                <li>Include the physical address of our business or site headquarters.</li>
                <li>Monitor third-party email marketing services for compliance, if one is used.</li>
                <li>Honor opt-out/unsubscribe requests quickly.</li>
                <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
              </ul>
              <p><b>If at any time you would like to unsubscribe from receiving future emails, you can email us at <a className={style.colorSilver} href="mailto:privacy@onseo.biz">privacy@onseo.biz</a> and we will promptly remove you from ALL correspondence.</b></p>
              <h3>Contacting Us</h3>
              <p>If there are any questions regarding this privacy policy, you may contact us using the <a className={style.colorSilver} href="mailto:privacy@onseo.biz">privacy@onseo.biz</a> email address.</p>
            </div>
          </div>    
        </div>}
      </div>);
  }
}

export default ModalWindow;
