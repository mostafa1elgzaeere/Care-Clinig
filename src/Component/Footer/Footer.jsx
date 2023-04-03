import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row px-md-3">
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Company</h5>
                            <ul className="footer-menu">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Editorial Team</a></li>
                                <li><a href="#">Protection</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>More</h5>
                            <ul className="footer-menu">
                                <li><a href="#">Terms &amp; Condition</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Advertise</a></li>
                                <li><a href="#">Join as Doctors</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Our partner</h5>
                            <ul className="footer-menu">
                                <li><a href="#">One-Fitness</a></li>
                                <li><a href="#">One-Drugs</a></li>
                                <li><a href="#">One-Live</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Contact</h5>
                            <p className="footer-link mt-2">10th of Ramadan - Sharqia - Egypt </p>
                            <a href="#" className="footer-link">( +02 ) 01023734243</a>
                            <a href="#" className="footer-link">mostafa0sayed1@gmail.com</a>
                            <h5 className="mt-3">Social Media</h5>
                            <div className="footer-sosmed mt-3">
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p id="copyright">Copyright © 2022 <a href="https://mail.google.com/" target="_blank">Mostafa Elgzaeere</a>. All right reserved</p>
                </div>
            </footer>
        </div>

    );
}

export default Footer;