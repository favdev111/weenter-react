import React from 'react';
import { Container } from 'react-bootstrap';

import logoImg from '../../assets/img/logo.png';
import facebookImg from '../../assets/img/facebook.svg';
import githubImg from '../../assets/img/github.svg';
import instagramImg from '../../assets/img/instagram.svg';
import mediumImg from '../../assets/img/medium.svg';
import redditImg from '../../assets/img/reddit.svg';
import twitterImg from '../../assets/img/twitter.svg';

function Footer() {
    return (
        <div className="footer-wrap">
            <Container>
                <div className="page-link-list">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="link-one azo-700-16 text-white">
                                Our team
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="link-one azo-700-16 text-white">
                                tokens
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="link-one azo-700-16 text-white">
                                connectwallet
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="link-one azo-700-16 text-white">
                                lightpaper
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end-line">
                    <div>
                        <img src={logoImg} alt=""/>
                    </div>
                    <div className="social-list">
                        <div className="social-one">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export { Footer };