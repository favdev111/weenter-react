import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

import './Home.scss';
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
                        <div button-group>
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
                                    <div className="text-green">01</div>
                                    <div className="card-des">Team set-up</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-green">02</div>
                                    <div className="card-des">Launch of informational website</div>
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
                                    <div className="text-blue">01</div>
                                    <div className="card-des">Presale and exchange listings</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue">02</div>
                                    <div className="card-des">Blockchain development and launch</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue">03</div>
                                    <div className="card-des">Launch of our MVP</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue">04</div>
                                    <div className="card-des">Influencer agency partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-blue">05</div>
                                    <div className="card-des">Marketing and promotion</div>
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
                                    <div className="text-yellow">01</div>
                                    <div className="card-des">Celebrity, Creator and Influencer partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-yellow">02</div>
                                    <div className="card-des">Expansion of creator communities on our platform</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-yellow">03</div>
                                    <div className="card-des">More Marketing and promotion</div>
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
                                    <div className="text-red">01</div>
                                    <div className="card-des">Mainstream partnerships</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red">02</div>
                                    <div className="card-des">500 active creator communitiesh</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red">03</div>
                                    <div className="card-des">2 Million active community members</div>
                                </div>
                                <div className="card-row">
                                    <div className="text-red">04</div>
                                    <div className="card-des">More Marketing and promotion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Home };