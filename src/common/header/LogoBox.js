import React from 'react';
import {Link} from 'react-router-dom';

export default class LogoBox extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                  <div className="logo-box" style={{
                    maxWidth: "320px",
                    marginRight: "15px",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Link to={process.env.PUBLIC_URL + `/`}>
                        <img 
                            src={publicUrl+"assets/images/resources/logo-3.png"} 
                            alt="Logo" 
                            style={{
                                maxWidth: "45%", 
                                height: "auto",
                                transform: "scale(1.6)",
                                transformOrigin: "left center"
                            }} 
                        />
                    </Link>
                </div>
            </>
        )
    }
}
// stricky logo thyo