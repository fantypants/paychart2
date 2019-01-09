import React, { Component } from 'react';
import { Footer } from '../common';
import Scene from '../three/Scene'
class Map extends Component {

    render(){

        return (
            <div className="page-sec"> 
                
                <div className="content-section">
                    <section id="second_sec" className="sec_second">
                        <div className="container-fluid select-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 cont_prt">
                                    <div className="count_img"><img src="image/count_two.png" /></div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 select_prt">
                                    <div className="select_option">
                                        <span className="fancyArrow"></span>
                                        <select className="graph_cntry_slct" onChange={this.handleChange}>
                                            <option value="volvo" selected>Select a country</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="India">India</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Vietnam">Vietnam</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div>
                        </div>
                        <div className="row bargraph">
                            <div className="col-md-12">
                                <div className="map-custom">
                                    <Scene />
                                </div>                                
                            </div>
                        </div>
                        <div className="col-sm-12 scroll_mobiles">
                            <div className="scroll_icon"><a href="#"><img src="image/scroll_one.png" /></a></div>
                            <div className="black-border"></div>
                        </div>
					</section>
                    <Footer />
				</div>
            </div> 
        );
    }
}

export default Map;