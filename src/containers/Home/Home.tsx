import React from 'react';
import { Container, Button } from 'react-bootstrap';

import './Home.scss';
import {Footer} from '../../components/Footer/Footer';
import '../../components/Footer/Footer.scss';
import bannerImg from '../../assets/img/home-banner.svg';
import creatorImg from '../../assets/img/creator-icon.svg';
import holdersImg from '../../assets/img/holders-icon.svg';
import rightArrowImg from '../../assets/img/arrow-right-ic.svg';
import rightArrowBlueImg from '../../assets/img/arrow-right-ic-b.svg';
import introTopImg from '../../assets/img/intro-top.svg';
import introBottomImg from '../../assets/img/intro-bottom.svg';
import roadGreen from '../../assets/img/road-green.svg';
import roadBlue from '../../assets/img/road-blue.svg';
import roadYellow from '../../assets/img/road-yellow.svg';
import roadRed from '../../assets/img/road-red.svg';
import logoMark from '../../assets/img/logo-mark.svg';
import comingImg from '../../assets/img/coming-img.svg';
import serviceImg from '../../assets/img/service-img.svg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-banner container">
                <div className="row">
                    <div className="title-container col-md-5">
                        <p className="gothic-700-16 text-green">At Weentar we are</p>
                        <h1 className="gothic-700-48 text-white"> Reimagining social media through the power of the blockchain.</h1>
                        <h6 className="gothic-700-16 text-gray">We are creating social media 3.0 with influencers, celebrities and creators being able to
                        launch their own digital currency by simply creating a profile with media content posted as Non
                            fungible Tokens that can be owned and traded on the weentar network</h6>
                        <div className="button-group">
                            <button className="btn-green gothic-700-16">Connect wallet</button>
                            <a href="" className="gothic-700-16 text-white">Read Lightpaper</a>
                        </div>
                    </div>
                    <div className="image-container col-md-7">
                        <img src={bannerImg} />
                    </div>
                </div>
            </div>
            <div className="home-offer">
                <Container>
                    <div className="offer-head text-center">
                        <h1 className="gothic-700-48 text-black">What do we <span>offer?</span></h1>
                        <div className="gothic-400-16">Individuals can buy and trade tokens of their favourite people to profit off as first movers and gain
                        access to exclusive content. Think of it as Onlyfans on the blockchain and instead of subscriptions, fans can own creator tokens and
                        creators can own their content and trade it as Non Fungible Tokens on the platform.</div>
                    </div>
                    <div className="holder-creator-container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="creator-wrap">
                                    <img src={creatorImg} alt="" />
                                    <h1 className="gothic-700-36">For <a href="" className="text-green">Creators</a></h1>
                                    <div className="card-content gothic-400-16">
                                        Creators can gain independence through a decentralized personal digital currency system that is linked with their growth
                                        and engagement with their community. On top of this, creators build their content as NFTs which they distribute through
                                        their own ecosystem with their digital currency being the backbone of that system.
                                    </div>
                                    <a href="" className="text-green .gothic-700-16">Learn More</a>
                                    <img src={rightArrowImg} className="arrow-icon" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="creator-wrap">
                                    <img src={holdersImg} alt="" />
                                    <h1 className="gothic-700-36">For <a href="" className="text-blue">Creators</a></h1>
                                    <div className="card-content gothic-400-16">
                                        Creators can gain independence through a decentralized personal digital currency system that is linked with their growth
                                        and engagement with their community. On top of this, creators build their content as NFTs which they distribute through
                                        their own ecosystem with their digital currency being the backbone of that system.
                                    </div>
                                    <a href="" className="text-blue .gothic-700-16">Learn More</a>
                                    <img src={rightArrowBlueImg} className="arrow-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
            <div className="home-intro">
                <div className="dec-container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={introTopImg} className="w-50" />
                        </div>
                        <div className="col-md-6">
                            <div className="dec-content text-left">
                                <h1 className="gothic-700-48 text-white">Decentralized social media would be led by <span>celebrities</span></h1>
                                <p className="gothic-400-16">One of the things that we understand deeply at Weentar is that real adoption happens when the
                                relevant people campaign for it. Our strategy to become the top social media 3.0 platform will
                                be our campaign to onboard celebrities, influencers and creators of all genres in various countries
                             to spread the word of mouth regarding this revolution.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dec-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="dec-content text-left">
                                <h1 className="gothic-700-48 text-white">Market size</h1>
                                <p className="gothic-400-16">There are over 50 million self identified creators in the social media space. Over a million of
                                these are celebrities in different countries around the world. What does this mean? It means that there is a potential for
                                50 million communities on Weentar. A bullet proof concept and the right publicity might lead to a vast majority of these 50
                                million joining the platform by the end of the decade. Once the superiority of our platform is recognised by the right minds,
                                 the growth of the platform tends to become exponential.</p>
                                <button className="btn-green gothic-700-16">Connect wallet</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={introBottomImg} className="w-50" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="road-map">
                <h1 className="gothic-700-48">Road map</h1>
                <div className="card-list">
                    <div className="card-container">
                        <div className="green-overlay"></div>
                        <div className="card-wrap">
                            <div className="card-img text-left">
                                <img src={roadGreen} alt="" />
                            </div>
                            <div className="card-content text-left">
                                <div className="card-row">
                                    <div className="text-green azo-700-12">01</div>
                                    <div className="card-des azo-400-16">Team set-up</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-green azo-700-12">02</div>
                                    <div className="card-des azo-400-16">Launch of informational website</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="blue-overlay"></div>
                        <div className="card-wrap">
                            <div className="card-img text-left">
                                <img src={roadBlue} alt="" />
                            </div>
                            <div className="card-content text-left">
                                <div className="card-row">
                                    <div className="text-blue azo-700-12">01</div>
                                    <div className="card-des azo-400-16">Presale and exchange listings</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue azo-700-12">02</div>
                                    <div className="card-des azo-400-16">Blockchain development and launch</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue azo-700-12">03</div>
                                    <div className="card-des azo-400-16">Launch of our MVP</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue azo-700-12">04</div>
                                    <div className="card-des azo-400-16">Influencer agency partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue azo-700-12">05</div>
                                    <div className="card-des azo-400-16">Marketing and promotion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="yellow-overlay"></div>
                        <div className="card-wrap">
                            <div className="card-img text-left">
                                <img src={roadYellow} alt="" />
                            </div>
                            <div className="card-content text-left">
                                <div className="card-row">
                                    <div className="text-yellow azo-700-12">01</div>
                                    <div className="card-des azo-400-16">Celebrity, Creator and Influencer partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-yellow azo-700-12">02</div>
                                    <div className="card-des azo-400-16">Expansion of creator communities on our platform</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-yellow azo-700-12">03</div>
                                    <div className="card-des azo-400-16">More Marketing and promotion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="red-overlay"></div>
                        <div className="card-wrap">
                            <div className="card-img text-left">
                                <img src={roadRed} alt="" />
                            </div>
                            <div className="card-content text-left">
                                <div className="card-row">
                                    <div className="text-red azo-700-12">01</div>
                                    <div className="card-des azo-400-16">Mainstream partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red azo-700-12">02</div>
                                    <div className="card-des azo-400-16">500 active creator communitiesh</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red azo-700-12">03</div>
                                    <div className="card-des azo-400-16">2 Million active community members</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red azo-700-12">04</div>
                                    <div className="card-des azo-400-16">More Marketing and promotion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-coming">
                <Container>
                    <div className="row">
                        <div className="coming-text col-md-6 text-left">
                            <div className="coming-title">
                                <div>
                                    <img src={logoMark} alt="" />
                                </div>
                                <h1 className="gothic-700-48 ml-4"><span>Weentar</span> is coming</h1>
                            </div>
                            <div className="coming-content">
                                Traditional social media platforms have become the arenas of the big dogs. There is a small “elite” who takes 95% (or even more!) of the
                                spoils while average creators only receive a quantum of the reward they actually deserve. The reason for this is that these platforms have
                                been hijacked by advertisers and marketers. Even consumers are “working” for free on these platforms by providing their valuable personal
                                data without seeing a penny in return.

                                Weentar targets this problem by building a platform that provides creators and their communities both: full control over their data as well as their reward
                                system for monetizing intellectual property.
                    </div>
                        </div>
                        <div className="coming-img col-md-6">
                            <img src={comingImg} className="w-50" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="overlap-with-footer">
                <div className="withFooter">
                    <div className="presale text-center">
                        <div className="pre-detail">
                            <div className="pre-header">
                                <h1 className="gothic-700-48">Presale details</h1>
                                <div className="presale-content gothic-400-16">
                                    We have a supply of 1.950.000.000 tokens for the ICO which should be distributed through 3 phases. The 
                                    following list depicts the initial plan of how to distribute tokens over the 3 phases on how to price the
                                    token during each phase. If the first phase will be a huge success, we might increase the price per token in later phases
                                </div>
                                <div className="wallet-info mt-2">
                                    <p className="gothic-700-20 text-green mb-0">PRESALE WALLET</p>
                                    <p className="gothic-700-20 text-black">0xCd35fa70CD2111985ae6F77c939b516f248e6935</p>
                                </div>
                            </div>
                        </div>
                        <div className="pre-card-container">
                            <div className="card-one-container border-blue">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="gothic-700-32 text-blue">Phase One</div>
                                        <div className="text-black azo-500-16">1BNB = 56,250 WNTR</div>
                                    </div>
                                    <div className="azo-400-16 text-secondary">April 16th to April 23rd 2021</div>
                                </div>
                                <div className="text-left mt-3">
                                    <div className="azo-400-16 text-secondary">Available</div>
                                    <h1 className="azo-700-32">
                                    450,000,000 WNTR
                                    </h1>
                                </div>
                                <div className="c-price d-flex justify-content-between align-items-center mt-1">
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Soft Cap</div>
                                        <div className="azo-700-32">4000 BNB</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Hard Cap</div>
                                        <div className="azo-700-32">8000 BNB</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-one-container border-yellow middle-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="gothic-700-32 text-yellow">Phase Two</div>
                                        <div className="text-black azo-500-16">1BNB = 31,250 WNTR</div>
                                    </div>
                                    <div className="azo-400-16 text-secondary">April 16th to April 23rd 2021</div>
                                </div>
                                <div className="text-left mt-3">
                                    <div className="azo-400-16 text-secondary">Available</div>
                                    <h1 className="azo-700-32">
                                    500,000,000 WNTR
                                    </h1>
                                </div>
                                <div className="c-price d-flex justify-content-between align-items-center mt-1">
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Soft Cap</div>
                                        <div className="azo-700-32">8000 BNB</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Hard Cap</div>
                                        <div className="azo-700-32">16000 BNB</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-one-container border-green">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="gothic-700-32 text-green">Phase Three</div>
                                        <div className="text-black azo-500-16">1BNB= 25,000 $WNTR</div>
                                    </div>
                                    <div className="azo-400-16 text-secondary">May 5th to May 15th 2021</div>
                                </div>
                                <div className="text-left mt-3">
                                    <div className="azo-400-16 text-secondary">Available</div>
                                    <h1 className="azo-700-32">
                                    1,000,000,000 WNTR
                                    </h1>
                                </div>
                                <div className="c-price d-flex justify-content-between align-items-center mt-1">
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Soft Cap</div>
                                        <div className="azo-700-32">20000 BNB</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="azo-400-16 text-secondary">Hard Cap</div>
                                        <div className="azo-700-32">40000 BNB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="how-buy">
                        <Container>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="buy-text">
                                        <h1 className="gothic-700-48 text-white">How to buy</h1>
                                        <div className="service-wrap">
                                            <div className="service-one-wrap">
                                                <div className="service-badge bg-green text-white">
                                                    01
                                                </div>
                                                <div className="service-text">
                                                    <h2 className="gothic-700-26 text-white">Connect</h2>
                                                    <div className="text-white azo-400-18">
                                                        First Connect your Metamask or TrustWallet to the "Connect Wallet" on the 
                                                        Homepage.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-one-wrap">
                                                <div className="service-badge bg-green text-white">
                                                    02
                                                </div>
                                                <div className="service-text">
                                                    <h2 className="gothic-700-26 text-white">Top Up</h2>
                                                    <div className="text-white azo-400-18">
                                                        Then send minimum of 0.1 BNB or maximum of 20 BNB to the Presale wallet
                                                    </div>
                                                    <p className="mt-2">
                                                        <span className="text-green azo-700-18 ">PRESALE WALLET</span> <br/>
                                                        <span className="text-white azo-700-18 ">0xCd35fa70CD2111985ae6F77c939b516f248e6935</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="service-one-wrap">
                                                <div className="service-badge bg-green text-white">
                                                    03
                                                </div>
                                                <div className="service-text">
                                                    <h2 className="gothic-700-26 text-white">Enjoy</h2>
                                                    <div className="text-white azo-400-18">
                                                    Then after you will received your $WNTR to your address within 24hours.                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="service-img">
                                        <img src={serviceImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export { Home };