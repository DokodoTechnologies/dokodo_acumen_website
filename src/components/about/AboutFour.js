import React from 'react';
import {Link} from 'react-router-dom';

export default class AboutFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="inner">
                                        <img src={publicUrl+"assets/images/update1.0/about-v3-img1.jpg"} alt="#" />
                                        <div className="about-three__img-video wow zoomIn" data-wow-delay="100ms">
                                            <a href="https://www.youtube.com/watch?v=XQGnQpgGUFg" className="video-popup">
                                                <div className="about-three__img-video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6> ABOUT US </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Empowering Your Projects in Nepal</h2>
                                    </div>

                                    <div className="about-three__content-inner">
                                        <div className="text1">
                                            <p>Based in Kathmandu, Nepal, we bring over 27 years of expertise in international representation and trading. We empower global companies with seamless market entry and project execution, offering comprehensive local support for large-scale supply, EPC, and turnkey projects.</p>
                                        </div>
                                        <div className="text2">
                                            <h4>Your dedicated partner for international representation, trading, and power solutions in Nepal. </h4>
                                        </div>
                                        <ul className="about-three__content-list">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> International Representation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Power Product & Service</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Strategic Partner Sourcing</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-three__content-btn">
                                            <Link href={`${process.env.PUBLIC_URL}/about-one`} className="thm-btn" data-text="Discover More +">
                                                Discover More +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}