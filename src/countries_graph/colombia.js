import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';

import Slider from "react-slick";
import * as d3 from "d3";
import {Bar} from 'react-chartjs-2';

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const data_1 = {
  labels: ['2013-2014', '2014-2015', '2015-2016','2016-2017'],
  datasets: [
    {
      label: 'Growth Rate of Total Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 1,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-6.8, -34.9, -13, 21.7],
      backgroundColor:[
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8"
      ],
    },
    {
      label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
      backgroundColor: '#A9A9A9',
      borderColor: '#A9A9A9',
      borderWidth: 1,
      hoverBackgroundColor: '#A9A9A9',
      hoverBorderColor: '#A9A9A9',
      data: [3.1, -3.6, -1.7, 7.2],
      backgroundColor:[
        "#A9A9A9",
        "#A9A9A9",
        "#A9A9A9",
        "#A9A9A9",
        "#A9A9A9"
      ],
    },
    {
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#BEBEBE',
      borderColor: '#BEBEBE',
      borderWidth: 1,
      hoverBackgroundColor: '#BEBEBE',
      hoverBorderColor: '#BEBEBE',
      data: [1, 0, -0.5, 1.7],
      backgroundColor:[
        "#BEBEBE",
        "#BEBEBE",
        "#BEBEBE",
        "#BEBEBE",
        "#BEBEBE"
      ],
    },
    {
      label: 'GDP Growth Rate (World)',
      backgroundColor: '#DCDCDC',
      borderColor: '#DCDCDC',
      borderWidth: 1,
      hoverBackgroundColor: '#DCDCDC',
      hoverBorderColor: '#DCDCDC',
      data: [2.9, 2.9, 2.5, 3.2],
      backgroundColor:[
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC"
      ],
    },
    {
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: 'rgb(68, 114, 196)',
      borderColor: 'rgb(68, 114, 196)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(68, 114, 196)',
      hoverBorderColor: 'rgb(68, 114, 196)',
      data: [75.8, 19.2, 101.2, 47.4],
      backgroundColor:[
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)"
      ],
    },
  ]
};





const sngl_bar = value => {
  return 'rgb(68, 114, 196)';
};
class Colombia extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = { width: window.innerWidth, }; // responsive mobile
      }

      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }

    // responsive mobile Start
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };

// responsive mobile end...
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessability:true,
            autoplay: false,
            arrows:true
            // autoplaySpeed: 5000
          };
        const { width } = this.state; // responsive mobile
        const isMobile = width <= 500; // responsive mobile
        if (isMobile) {
            return(
               <div>
                      <Slider ref={slider => (this.slider = slider)} {...settings}>
                          <div className="br_sldr_upr">
                            <div className="bar_graph bar_sldr">
                              {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                              <Bar
                              data={data_1}
                              width={320}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false,
                                },
                                animation:{
                                  duration:10000
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return (value*1)+'%';
                                      },
                                    },
                                  }]
                                },
                              }}
                            />
                            </div>
                          </div>
                      </Slider>
                      <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                        <div className="both_ply_pause">
                          <button className="button" onClick={this.play}>
                            <img src="/image/play_button.png" />
                          </button>
                          <button className="button pause_btn" onClick={this.pause}>
                            <img src="/image/pause_button.png" />
                          </button>
                        </div>
                      </div>
                    </div>
            );
          }
          else{
            return(
              <div>
                     <Slider ref={slider => (this.slider = slider)} {...settings}>
                         <div className="br_sldr_upr">
                           <div className="bar_graph bar_sldr">
                             {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                             <Bar
                              data={data_1}
                              width={680}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false
                                },
                                animation:{
                                  duration:10000
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return (value*1)+'%';
                                      },
                                    },
                                  }]
                                },
                              }}
                            />
                           </div>
                         </div>
                     </Slider>

                     <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                       <div className="both_ply_pause">
                         <button className="button" onClick={this.play}>
                           <img src="/image/play_button.png" />
                         </button>
                         <button className="button pause_btn" onClick={this.pause}>
                           <img src="/image/pause_button.png" />
                         </button>
                       </div>
                     </div>
                     <div className="slider_whole_dot">
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(0)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2013</div>
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(1)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2014</div>
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(2)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2015</div>
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(3)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line sldr_line_last"></div>
                          <div className="year_dot">2016</div>
                        </a>
                      </div>
                   </div>
           );
          }
    }
}
export default Colombia;
