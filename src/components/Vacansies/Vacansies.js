import React, { Component } from 'react';
import style from './Vacansies.css';
// import Footer from './Footer';


const Content = [
    'SENIOR JAVA DEVELOPER',
    'MANUAL QA ENGINEER',
    'SENIOR BUSINESS ANALYST',
    'JAVASCRIPT DEVELOPER',
    'IOS DEVELOPER',
    'UI/UX DEVELOPER',
    'BUSINESS ANALYST',
    'MIDDLE JAVASCRIPT DEVELOPER',
    'SENIOR .NET DEVELOPER',
    '3D ARTIST',
    'JAVA DEVELOPER',
    'FRONT-END DEVELOPER'
]
const colorBlue = '#00CDFF';
const vacansies = [
    {
        title: 'SENIOR JAVA DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'MANUAL QA ENGINEER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'SENIOR BUSINESS ANALYST',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'JAVASCRIPT DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'IOS DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'UI/UX DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'BUSINESS ANALYST',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'MIDDLE JAVASCRIPT DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'SENIOR .NET DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: '3D ARTIST',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'JAVA DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    },
    {
        title: 'FRONT-END DEVELOPER',
        region: 'Kiev',
        company: 'IT-software Manufacturing',
        contact: 'Valentyna',
        typeJob: 'full-time',
        titleRequirements: 'Technical Requirements',
        listRequirements: [
            'Experience in software development with Java programing language.',
            'Experience in Java enterprice technologies and distributed Enterprice applications, databases, message brokers. Concurreny, clustering redundancy, performance.',
            'Experience over 3+ years.',
            'Spring, Hibernate experience is a must.'
        ],
        listResponsibilities: [
            'Collection and formalization documentation of business requirements for the project.',
            'Coordination with the customer of the completed documentation.',
            'Analysis of spesifications / documents of third-party services and clarificationthe details.',
            'Preparation and detailed description of the flow during integration with third-party systems.',
            'Preparation and transmission of functional and technical requirements to the team.'
        ],
        offerCompany: [
            'Really good team and democratic management, many works in the company for a long time and sincerely committedto their cause',
            'Health insurance',
            'Paid sick leave and 20-day vacation',
            'English courses',
            'Sport compensations',
            'Team meetings and teambuilding'
        ]
    }
]
class NumbersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: Content,
            isOpen: true,
            n: vacansies,
            k: 0
            
        }
    }
    handleClick(index) {
        this.setState({
            isOpen: true,
            k: index,
        });
    }
    render() {
        return(
                <div className={style.marginTop}>
                    {this.state.numbers.map((number, index) => 
                        <div onClick={this.handleClick.bind(this,index)} key={index}>
                                {
                                    this.state.k === index ?
                                        <div className={style.colorBlue + " " + style.interval}>
                                            {number}
                                        </div> : <div className={style.interval + " " + style.animationHover}>{number}</div>
                                }
                            {
                                this.state.k === index ? 
                                <div>
                                    {!this.state.isOpen ? null : 
                                        <div className={style.locateRight}>
                                            <span className={style.fontTitleOne}>{vacansies[this.state.k].title}</span><br />
                                            <span className={style.colorSilver}>Region: </span><span className={style.fontFamilyBold}>{vacansies[this.state.k].region}</span><br />
                                            <span className={style.colorSilver}>Company branch: </span><span className={style.fontFamilyBold}>{vacansies[this.state.k].company}</span><br />
                                            <span className={style.colorSilver}>Contact person: </span><span className={style.fontFamilyBold}>{vacansies[this.state.k].contact}</span> <br /><br />
                                            <span className={style.marginTopDown + " " + style.fontFamilyBold}>{vacansies[this.state.k].titleRequirements}: </span>
                                            <ul className={style.marginTopDown}>
                                                {
                                                    this.state.n[this.state.k].listRequirements.map((item, index) => 
                                                    <li key={index} className={style.colorBlue + " " + style.sizelist}>
                                                        <span className={style.colorSilver + " " + style.fontFamilyBold}>{item}</span>
                                                    </li>
                                                )
                                                }
                                            </ul>
                                            <span className={style.marginTopDown + " " + style.fontFamilyBold}>Responsibilities:</span>      
                                            <ul className={style.marginTopDown}>
                                                {
                                                    this.state.n[this.state.k].listResponsibilities.map((item, index) => 
                                                    <li key={index} className={style.colorBlue + " " + style.sizelist}>
                                                        <span className={style.colorSilver + " " + style.fontFamilyBold}>{item}</span>
                                                    </li>
                                                )
                                                }
                                            </ul> 
                                            <span className={style.marginTopDown + " " + style.fontFamilyBold}>What do we offer:</span>     
                                            <ol className={style.marginTopDown}>
                                                {
                                                    this.state.n[this.state.k].listResponsibilities.map((item, index) => 
                                                    <li key={index} className={style.sizelist}>
                                                        <span className={style.colorSilver + " " + style.fontFamilyBold}>{item}</span>
                                                    </li>
                                                )
                                                }
                                            </ol>          
                                        </div>
                                    }
                                </div> : 
                                null
                            }
                        </div>)   
                    }
                </div>
            
        );
    }
}
class Vacansies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            Content: Content
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        return(
            <div className={"container-fluid " + style.marginTopContainer}>
                <div className={style.title}>
                    <span>VACANSIES</span>
                    <div className={style.frontTitle}>VACANSIES</div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <NumbersList items={this.state.Content} />
                    </div>
                </div>
                {/* <Footer></Footer> */}
            </div>
        );
    }
}
export default Vacansies;