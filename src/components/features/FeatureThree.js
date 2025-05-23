import React from 'react';

export default class FeatureThree extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".slider-bg-slide").length) {
            $(".slider-bg-slide").each(function () {
              var Self = $(this);
              var bgSlideOptions = Self.data("options");
              var bannerTwoSlides = Self.vegas(bgSlideOptions);
            });
        }
          
    }
    render(){
        return (
            <>
                {/* Start Mission Vision One */}
                <section className="mission-vision-one">
                    <div className="mission-vision-one__wrapper">
                        <div className="slider-bg-slide"
                            data-options='{ "delay": 10000, "slides": [ { "src":"assets/images/update1.0/mission-vision-slide-1.jpg" }, { "src": "assets/images/update1.0/mission-vision-slide-2.jpg" }, { "src": "assets/images/update1.0/mission-vision-slide-3.jpg" } ], "transition": "slideLeft", "animation": "kenburns", "timer": false, "align": "top" }'>
                        </div>
                        <div className="slider-bg-slide-overly"></div>
                        <div className="container">
                            <div className="mission-vision-one__inner">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="mission-vision-one__single">
                                            <div className="icon-box">
                                                <span className="fas fa-clipboard-check"></span>
                                            </div>
                                            <h2>Our Mission</h2>
                                            <p>To lead in providing quality power solutions and to be the preferred partner for international companies seeking successful ventures in Nepal.</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="mission-vision-one__single">
                                            <div className="icon-box">
                                                <span className="fas fa-globe "></span>
                                            </div>
                                            <h2>Our Vision</h2>
                                            <p>To be the leading and most respected company in Nepal for international representation, trading, and power solutions, recognized for our expertise and commitment to our partners' success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Mission Vision One */}
            </>
        )
    }
}