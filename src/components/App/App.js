import React, {Component} from 'react';
import Header from '../header/Header';
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import WhoTrustUs from '../WhoTrustUs/WhoTrustUs';
import { injectGlobal } from 'styled-components';
import Scroll from 'react-scroll';
import myFont from '../../../public/fonts/BebasNeueBold.ttf';
import myFont1 from '../../../public/fonts/ProximaNovaCondensedSemibold.otf';
import myFont2 from '../../../public/fonts/ProximaNovaCondensedRegular.otf';
import myFont3 from '../../../public/fonts/ProximaNovaCondensedSemibold.otf';
import HowWeDo from '../HowWeDo/HowWeDo';
import Vacansies from '../Vacansies/Vacansies';

var Element = Scroll.Element;

injectGlobal`
  @font-face {
    font-family: 'BebasNenuBold';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
injectGlobal`
  @font-face {
    font-family: 'ProximaNovaCondensedSemibold';
    src: url(${myFont1}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
injectGlobal`
  @font-face {
    font-family: 'ProximaNovaCondensedRegular';
    src: url(${myFont2}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
injectGlobal`
  @font-face {
    font-family: 'ProximaNovaCondensedSemibold';
    src: url(${myFont3}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        {/* <Route exact path="/" component={Home}/>
        <Route path="/what-we-do" component={WhatWeDo}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/about" component={About}/>
        <Route path="/who-trust-us" component={WhoTrustUs}/>
        <Route path="/how-we-do" component={HowWeDo}/>
        <Route path="/vacansies" component={Vacansies}/> */}
        <Element name="Home">
          <Home></Home>
        </Element>
        <Element name="About">
          <About></About>
        </Element>
        <Element name="WhoTrustUs">
          <WhoTrustUs></WhoTrustUs>
        </Element>
        <Element name="WhatWeDo">
          <WhatWeDo></WhatWeDo>
        </Element>
        <Element name="HowWeDo">
          <HowWeDo></HowWeDo>
        </Element>
        <Element name="Vacansies">
          <Vacansies></Vacansies>
        </Element>
        <Element name="Contacts">
          <Contacts></Contacts>
        </Element>
      </div>
    );
  }
}

export default App;
