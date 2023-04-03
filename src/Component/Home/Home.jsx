import React from 'react';
import logo from "./doctor.png"
import background from "./back.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAmbulance, faHospital, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Home(props) {

    return (
        <div>
            <div className="page-hero bg-image overlay-dark " style={{ "backgroundImage":`url(https://s3.mortarr.com/images/project_gallery_images/hospital-reception-and-check-in-area.jpeg)` }}>
                <div className="hero-section container">
                    <div className="container text-center  ">
                        <span className="subhead">Caring for the whole patient, not just your symptoms</span>
                        <h1 className="display-4 mt-2">Healthcare is wealth</h1>
                    </div>
                </div>
            </div>
            <div className="bg-light ">
                <div className="page-section py-3 mt-md-n5 custom-index ml-5 " style={{"marginTop":"-2%"}} >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp d-flex justify-content-center">
                                    <div className="circle-shape bg-secondary text-white">
                                    <FontAwesomeIcon  icon={faMessage}/>

                                        <span className="mai-chatbubbles-outline" />
                                    </div>
                                    <p><span>Chat</span> with a doctors</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp d-flex justify-content-center">
                                    <div className="circle-shape bg-primary text-white">
                                    <FontAwesomeIcon  icon={faAmbulance}/>

                                        <span className="mai-shield-checkmark" />
                                    </div>
                                    <p><span>One</span>-Health Protection</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp d-flex justify-content-center">
                                    <div className="circle-shape bg-accent text-white">
                                        <FontAwesomeIcon  icon={faHospital}/>
                                        <span className="mai-basket" />
                                    </div>
                                    <p><span>One</span>-Health Pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* .page-section */}
                <div className="page-section pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 py-3 wow fadeInUp">
                                <h1>Welcome to Your Health Center</h1>
                                <p className="text-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                                <Link to="/about" className="btn btn-primary">Learn More</Link>
                            </div>
                            <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                                <div className="img-place custom-img-1">
                                    <img src="https://giz-cambodia.com/assets/img/bg-doctor.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* .bg-light */}
            </div> {/* .bg-light */}
        </div>

    );
}

export default Home;