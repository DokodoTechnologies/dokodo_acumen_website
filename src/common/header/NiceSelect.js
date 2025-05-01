import React from 'react';

export default class NiceSelect extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        $('select').niceSelect();
          
    }
    render(){
        return (
            <>
                <div className="location-box">
                    <div className="select-box">
                        <select className="selectmenu wide">
                            <option selected="selected">Kathmandu</option>
                            <option>Pokhara</option>
                            <option>Chitwan</option>
                            <option>Birgunj</option>
                            <option>Lalitpur</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}