import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

import './Home.scss';
import bannerImg from '../../assets/img/home-banner.svg';

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
        </div>
    );
}

export { Home };