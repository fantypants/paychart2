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
      borderWidth: 0,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-2.6],
      backgroundColor:[
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
      ],
    },
    {
      label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 0,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [2.4],
      backgroundColor:[
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
      ],
    },
    {
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 0,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [4.7],
      backgroundColor:[
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
      ],
    },
    {
      label: 'GDP Growth Rate (World)',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 0,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [2.9],
      backgroundColor:[
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
      ],
    },
    {
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 0,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [127.1],
      backgroundColor:[
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
        'rgba(200,200, 200, 0)',
      ],
    },
  ]
}


 const sngl_bar = value => {
   return 'rgb(68, 114, 196)';
 };
class South_Africa extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = { width: window.innerWidth,  chartData: data_1}; // responsive mobile
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

  animation(data, datasetPosition) {
    const oldState = this.state.chartData;

    let datasets = oldState.datasets;
    datasets[datasetPosition] = data;
    const newState = Object.assign({}, oldState, {
      datasets: datasets
    })

    this.setState({
      chartData: newState
    })
  }

  updateColumn(data, datasetPosition) {
    const oldState = this.state.chartData;

    let datasets = oldState.datasets;
    datasets[datasetPosition] = data;
    const newState = Object.assign({}, oldState, {
      datasets: datasets
    })

    this.setState({
      chartData: newState
    })
  }

  componentDidMount() {
    setTimeout(() => this.animation({
      label: 'Growth Rate of Total Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 1,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-2.6],
      backgroundColor:[
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8"
      ],
    }, 0), 500)

    setTimeout(() => this.animation({
          label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
          backgroundColor: '#A9A9A9',
          borderColor: '#A9A9A9',
          borderWidth: 1,
          hoverBackgroundColor: '#A9A9A9',
          hoverBorderColor: '#A9A9A9',
          data: [2.4],
          backgroundColor:[
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9"
          ],
        }, 1), 1000)
        //
    setTimeout(() => this.animation({
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#BEBEBE',
      borderColor:'#BEBEBE',
      borderWidth: 1,
      hoverBackgroundColor:'#BEBEBE',
      hoverBorderColor:'#BEBEBE',
      // data: [1, 0, -0.5, 1.7],
      data: [4.7],
      backgroundColor:[
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE'
      ],
    }, 2), 1500)

    setTimeout(() => this.animation({
      label: 'GDP Growth Rate (world)',
      backgroundColor: '#DCDCDC',
      borderColor: '#DCDCDC',
      borderWidth: 1,
      hoverBackgroundColor: '#DCDCDC',
      hoverBorderColor: '#DCDCDC',
      // data: [2.9, 2.9, 2.5, 3.2],
      data: [2.9],
      backgroundColor:[
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC'
      ],
    }, 3), 2000)

    setTimeout(() => this.animation({
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: '#4472c4',
      borderColor: '#4472c4',
      borderWidth: 1,
      hoverBackgroundColor: '#4472c4',
      hoverBorderColor: '#4472c4',
      // data: [6.2, 14.9, 32.8, 36.9],
      data: [127.1],
      backgroundColor:[
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4'
      ],
    }, 4), 2500)


    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of Total Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 1,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-2.6, -13.3],
      backgroundColor:[
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8"
      ],
    }, 0), 3000)

    setTimeout(() => this.updateColumn({
          label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
          backgroundColor: '#A9A9A9',
          borderColor: '#A9A9A9',
          borderWidth: 1,
          hoverBackgroundColor: '#A9A9A9',
          hoverBorderColor: '#A9A9A9',
          data: [2.4, -7.2,],
          backgroundColor:[
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9"
          ],
        }, 1), 3500)
        //
    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#BEBEBE',
      borderColor:'#BEBEBE',
      borderWidth: 1,
      hoverBackgroundColor:'#BEBEBE',
      hoverBorderColor:'#BEBEBE',
      data: [4.7, 3.1],
      backgroundColor:[
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE'
      ],
    }, 2), 4500)

    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (world)',
      backgroundColor: '#DCDCDC',
      borderColor: '#DCDCDC',
      borderWidth: 1,
      hoverBackgroundColor: '#DCDCDC',
      hoverBorderColor: '#DCDCDC',
      data: [2.9, 2.9],
      backgroundColor:[
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC'
      ],
    }, 3), 5000)

    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: '#4472c4',
      borderColor: '#4472c4',
      borderWidth: 1,
      hoverBackgroundColor: '#4472c4',
      hoverBorderColor: '#4472c4',
      data: [127.1, 60.4],
      backgroundColor:[
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4'
      ],
    }, 4), 5500)

    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of Total Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 1,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-2.6, -13.3, -7.7],
      backgroundColor:[
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8"
      ],
    }, 0), 6000)


    setTimeout(() => this.updateColumn({
          label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
          backgroundColor: '#A9A9A9',
          borderColor: '#A9A9A9',
          borderWidth: 1,
          hoverBackgroundColor: '#A9A9A9',
          hoverBorderColor: '#A9A9A9',
          data: [2.4, -7.2, -4.5],
          backgroundColor:[
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9"
          ],
        }, 1), 6500)
        //
    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#BEBEBE',
      borderColor:'#BEBEBE',
      borderWidth: 1,
      hoverBackgroundColor:'#BEBEBE',
      hoverBorderColor:'#BEBEBE',
      data: [4.7, 3.1, 1.3],
      backgroundColor:[
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE'
      ],
    }, 2), 7000)

    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (world)',
      backgroundColor: '#DCDCDC',
      borderColor: '#DCDCDC',
      borderWidth: 1,
      hoverBackgroundColor: '#DCDCDC',
      hoverBorderColor: '#DCDCDC',
      data: [2.9, 2.9, 2.5],
      backgroundColor:[
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC'
      ],
    }, 3), 7500)

    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: '#4472c4',
      borderColor: '#4472c4',
      borderWidth: 1,
      hoverBackgroundColor: '#4472c4',
      hoverBorderColor: '#4472c4',
      data: [127.1, 60.4, 27.9],
      backgroundColor:[
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4'
      ],
    }, 4), 8500)

    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of Total Offline Exports',
      backgroundColor: '#C8C8C8',
      borderColor: '#C8C8C8',
      borderWidth: 1,
      hoverBackgroundColor: '#C8C8C8',
      hoverBorderColor: '#C8C8C8',
      data: [-2.6, -13.3, -7.7, 19.1],
      backgroundColor:[
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8"
      ],
    }, 0), 9000)


    setTimeout(() => this.updateColumn({
          label: 'Growth Rate of PayPal Mirror Basket of Offline Exports',
          backgroundColor: '#A9A9A9',
          borderColor: '#A9A9A9',
          borderWidth: 1,
          hoverBackgroundColor: '#A9A9A9',
          hoverBorderColor: '#A9A9A9',
          data: [2.4, -7.2, -4.5, 9.2],
          backgroundColor:[
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9",
            "#A9A9A9"
          ],
        }, 1), 9500)
        //
    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (Latin America & Caribbean)',
      backgroundColor: '#BEBEBE',
      borderColor:'#BEBEBE',
      borderWidth: 1,
      hoverBackgroundColor:'#BEBEBE',
      hoverBorderColor:'#BEBEBE',
      data:[4.7, 3.1, 1.3, 2.6],
      backgroundColor:[
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE',
        '#BEBEBE'
      ],
    }, 2), 10000)

    setTimeout(() => this.updateColumn({
      label: 'GDP Growth Rate (world)',
      backgroundColor: '#DCDCDC',
      borderColor: '#DCDCDC',
      borderWidth: 1,
      hoverBackgroundColor: '#DCDCDC',
      hoverBorderColor: '#DCDCDC',
      data: [2.9, 2.9, 2.5, 3.2],
      backgroundColor:[
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC',
        '#DCDCDC'
      ],
    }, 3), 10500)

    setTimeout(() => this.updateColumn({
      label: 'Growth Rate of SMEs Using PayPal',
      backgroundColor: '#4472c4',
      borderColor: '#4472c4',
      borderWidth: 1,
      hoverBackgroundColor: '#4472c4',
      hoverBorderColor: '#4472c4',
      data: [127.1, 60.4, 27.9, 28.6],
      backgroundColor:[
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4',
        '#4472c4'
      ],
    }, 4), 11000)

}

// responsive mobile end...
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility:true,
            autoplay: false,
            arrrows:true
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
                              <h2 style={{textAlign: 'center'}}>Growth rate comparison</h2>
                              <Bar
                              data={this.state.chartData}
                              width={320}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false
                                },
                                animation:{
                                  duration:10000,
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      suggestedMax: 127,
                                      suggestedMin: -13.3,
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
                            <img src="image/play_button.png" />
                          </button>
                          <button className="button pause_btn" onClick={this.pause}>
                            <img src="image/pause_button.png" />
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
                          <h2 style={{textAlign: 'center'}}>Growth rate comparison</h2>
                          <Bar
                              data={this.state.chartData}
                              width={680}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false
                                },
                                animation:{
                                  duration:10000,
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      suggestedMax: 127,
                                      suggestedMin: -13.3,
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
                        <img src="image/play_button.png" />
                      </button>
                      <button className="button pause_btn" onClick={this.pause}>
                        <img src="image/pause_button.png" />
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
export default South_Africa;
