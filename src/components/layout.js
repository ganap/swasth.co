import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CoachingBG from '../assets/images/top-bg@3x.png'
import '../assets/scss/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-multi-carousel/lib/styles.css'
import {Button, Icon} from 'antd'
import CategoryTabs from './BreadCrum'


class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            visible: true,
        }
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''})
        }, 100)
    }

    handleClick = () => {
        this.setState({
            visible: false,
        })
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    render() {
        const {children} = this.props
        return (
            <div className={`body ${this.state.loading} ${this.props.hideHomeImg ? 'light-body-bg' : ''}`}>
                {/*{!this.props.rearrangeChildren ? <img src={CoachingBG} className='home-bg-img coaching-bg-img'/> : null}*/}
                {/*{this.state.visible && this.props.extraHeader ?
                    <div className="para-text extra-header">
                        <p className="para-text">
                            We are offering free premium access to our Clinician Platform during the COVID-19 crisis.
                        </p>
                        <a href="https://clinician.swasth.co" target="_blank">
                            <Button className='para-text'>Get Started</Button>
                        </a>
                        <Icon type='close-circle' onClick={this.handleClick}/>
                    </div> : ''}*/}

                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Header
                        aboutHeader={this.props.aboutHeader}
                        show={this.props.show}
                        isLogoWhite={this.props.isLogoWhite}
                    />
                    {this.props?.categories ? <CategoryTabs edges={this.props?.categories}/> : null}
                    {!this.props.rearrangeChildren ? children : null}
                </div>

                {this.props.rearrangeChildren ? children : null}

                    <Footer
                        minFooterHeight={this.props.minFooterHeight}
                        show={this.props.show}
                        hideFooter={this.props.hideFooter}
                        showCustomBottom={this.props.topBg || false}
                    />
            </div>
        )
    }
}

export default Layout
