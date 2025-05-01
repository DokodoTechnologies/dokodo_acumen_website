import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <div className="contact-page-google-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <iframe
                                    title="Address"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7379489422037!2d85.30236173153159!3d27.725376158190528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e343d110f7%3A0x4a63834662cd734a!2sKMC%20Ward%20no.16%20Office!5e0!3m2!1sen!2snp!4v1745744752624!5m2!1sen!2snp"
                                    className="contact-page-google-map__one" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}