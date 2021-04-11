import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

import './Home.scss';
import bannerImg from '../../assets/img/home-banner.svg';
import creatorImg from '../../assets/img/creator-icon.svg';
import holdersImg from '../../assets/img/holders-icon.svg';
import rightArrowImg from '../../assets/img/arrow-right-ic.svg';
import rightArrowBlueImg from '../../assets/img/arrow-right-ic-b.svg';

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
                                    <img src={creatorImg} alt=""/>
                                    <h1 className="gothic-700-36">For <a href="" className="text-green">Creators</a></h1>
                                    <div className="card-content gothic-400-16">
                                        Creators can gain independence through a decentralized personal digital currency system that is linked with their growth 
                                        and engagement with their community. On top of this, creators build their content as NFTs which they distribute through 
                                        their own ecosystem with their digital currency being the backbone of that system.
                                    </div>
                                    <a href="" className="text-green .gothic-700-16">Learn More</a>
                                    <img src={rightArrowImg} className="arrow-icon" alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="creator-wrap">
                                    <img src={holdersImg} alt=""/>
                                    <h1 className="gothic-700-36">For <a href="" className="text-blue">Creators</a></h1>
                                    <div className="card-content gothic-400-16">
                                        Creators can gain independence through a decentralized personal digital currency system that is linked with their growth 
                                        and engagement with their community. On top of this, creators build their content as NFTs which they distribute through 
                                        their own ecosystem with their digital currency being the backbone of that system.
                                    </div>
                                    <a href="" className="text-blue .gothic-700-16">Learn More</a>
                                    <img src={rightArrowBlueImg} className="arrow-icon" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
}

export { Home };