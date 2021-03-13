import React from "react";
import {Col, Row} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import bannerGraphic from "../../assets/images/coaching-woman.jpeg";
import Care from "../../assets/images/overview/care.jpg"
import Coaching from "../../assets/images/coachingProgram/coaching.png"
import CoachingMobile from "../../assets/images/coachingProgram/coaching-mobile.png"

const CoachingOverview = () => {
    return (
        <div className="coaching-overview-container">
            <div className="coaching-overview">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Evidence based <br/>Behavioral Health Coaching
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">LEARN ABOUT OUR PROGRAMS </p>
                                    </div>

                                    <a href="https://www.resiliens.com/coaching" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Request a demo
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src={bannerGraphic}
                                         alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>

            {/* *********** For Everyone ************ */}

            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <div className="coaching-overview-access-section">
                    <h2 className="base-text">Access care through our innovative Coaching Platform</h2>
                    <div className="divider"/>
                    <div className="sequence-sections">
                        <div className="section">
                            <p className="para-medium-text title">Programs for specific conditions and lifestyle</p>
                            <p className="para-text desc">The programs are created by experts in evidence-based therapies treating these conditions with peer-reviewed research.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Supported by licensed clinicians and coaches</p>
                            <p className="para-text desc">The programs typically run between 6-14 weeks with a weekly live session and supported by coaches for continuous support.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Digital library to aid skill practice</p>
                            <p className="para-text desc">Develop skills by accessing a comprehensive library of video-guided lessons and exercises that accompany the sessions.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Tracking tools to see how you are doing</p>
                            <p className="para-text desc">You can measure your progress with comprehensive set of tools and clinician assessments specific to the condition.</p>
                        </div>
                    </div>
                    <div className="divider"/>
                    <img src={Care} className="section-img"/>
                </div>
{/*
                <div className="coaching-overview-choose-section">
                    <h2 className="base-text">Choose how and where to meet,<br/> based on your lifestyle</h2>
                    <div className="sequence-sections">
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-1.png")}/>
                            <p className="para-medium-text title">In-person</p>
                            <p className="para-text desc">
                                Ideal for honoring member preference and treating complex needs
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-2.png")}/>

                            <p className="para-medium-text title">
                                Live-video
                            </p>
                            <p className="para-text desc">
                                Convenient for busy lifestyles and expanded access to specialists
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-3.png")}/>

                            <p className="para-medium-text title">Live-messaging</p>
                            <p className="para-text desc">
                                Private and flexible, great for connecting with support anywhere
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-4.png")}/>

                            <p className="para-medium-text title">
                                Self-led
                            </p>
                            <p className="para-text desc">
                                Digital CBT lessons and exercises for support anytime
                            </p>
                        </div>
                    </div>
                </div>
*/}
                <div className="coaching-overview-new-skills-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Develop new skills to cope with your challenges
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            With Resiliens' coaching programs, in addition weekly sessions with the program facilitator, members receive support beyond 1-1 sessions with coaches, as they build and practice skills to meet the
                                            challenges of their daily lives. With 24/7 access to personalized digital exercises and direct messaging with their coaches and peers from the cohort, members get better faster.
                                        </p>
                                    </div>

                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src={Coaching}
                                         alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="coaching-overview-track-progress-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={CoachingMobile}
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Intuitive Tracking tools to measure progress
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            An extensive set of tracking tools for mood, emotions, gratitude checkin, reflection enables members to monitor progress. Further, members
                                             submit standardized assessments during the program that gives program facilitators and coaches insight into how members are doing over a period of time.
                                        </p>
                                    </div>
{/*
                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        Our Methodology <ArrowRightOutlined/>
                                    </a>
*/}                                    
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
            {/* *********** For Everyone ************ */}



            {/* ****************** For Behavioral Health Professionals *****************  */}

{/*
            <div className="coaching-overview-bhp-container">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                <h2 className="base-text">For Behavioral Health Professionals</h2>

                    <Row className='-row-flex-center card-row'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-1.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={10} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Navigating back-to-school
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Dr. Renee Schneider offers 8 strategies families can use to prioritize mental well-being for both parents and children.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Help your employees cope with stress
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Often misunderstood, self-care is a powerful buffer against the mental and
                                            physical health impacts of stress and is even more essential tool as your teams deal with the emotional toll of the pandemic.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>
                                <Col md={10} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-2.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="divider"/>
                    <Row className='-row-flex-center card-row'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-1.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={10} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Navigating back-to-school
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Dr. Renee Schneider offers 8 strategies families can use to prioritize mental well-being for both parents and children.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Help your employees cope with stress
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Often misunderstood, self-care is a powerful buffer against the mental and
                                            physical health impacts of stress and is even more essential tool as your teams deal with the emotional toll of the pandemic.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>
                                <Col md={10} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-2.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="divider"/>

                    <div className="coaching-overview-bhp-flex-section">
                        <div className="sequence-sections">
                            <div className="section bg-section">
                                <p className="para-text title">
                                    The Latest Coronavirus Resources
                                </p>
                                <p className="para-text desc">
                                    Guidance from Lyra clinicians on how to cope effectively with uncomfortable emotions provoked by the coronavirus
                                </p>
                            </div>
                            <div className="section">
                                <img src={require("../../assets/images/overview/m-e-3.png")}/>

                                <p className="para-text text">members</p>
                                <p className="para-text title">Mission Impossible: Learnings From 6 Working Parents in the Time of Coronavirus</p>
                                <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                    Read more <ArrowRightOutlined/>
                                </a>
                            </div>
                            <div className="section">
                                <img src={require("../../assets/images/overview/m-e-4.png")}/>
                                <p className="para-text text">members</p>
                                <p className="para-text title">
                                    Coping with Uncertainty in the Time of Covid-19
                                </p>
                                <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                    Read more <ArrowRightOutlined/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/}
            {/* ****************** For Behavioral Health Professionals *****************  */}

        </div>
    )
};

export default CoachingOverview;
