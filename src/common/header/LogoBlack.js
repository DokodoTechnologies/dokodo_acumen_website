import React from 'react';
import {Link} from 'react-router-dom';

export default class LogoBlack extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
              <div className="logo" style={{
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
                                maxWidth: "75%", 
                                height: "auto",
                                transform: "scale(0.95)",
                                transformOrigin: "left center"
                            }}
                        />        
                    </Link>
                </div>
            </>
        )
    }
}

// was stricky logo