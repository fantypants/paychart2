import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';
import Slider from "react-slick";
import * as d3 from "d3";
import {HorizontalBar,Pie, Bar} from 'react-chartjs-2';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// Here we init the variables
let year = 0;
//This is the style var we are using
let yearStyle;
//This was being used to hold state data from the chart, but i'm not using it now, it's left in incase you want to use it
let stateData;
let statePosition;
// This is false by default i.e chart wont play auto
let playChart = true;

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
      data: [-4.8],
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
      data: [-3.2],
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
      data: [215],
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


class Kenya extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = { width: window.innerWidth, chartData: data_1}; // responsive mobile

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
          if(playChart !== false){
          const oldState = this.state.chartData;
          let datasets = oldState.datasets;
          datasets[datasetPosition] = data;
          const newState = Object.assign({}, oldState, {
            datasets: datasets
          })

          this.setState({
            chartData: newState
          })


          switch(year) {
            case 0:
            yearStyle = {
              left: 18,
              top: 25,
              position: 'relative',
              width: '40px',
              borderRadius: 50,
              borderRadiusInputTopLeft: 10,
              borderRadiusInputTopRight: 10,
              borderRadiusInputBottomLeft: 10,
              borderRadiusInputBottomRight: 10,
              height: '40px',
              backgroundColor: `rgba(0,0,255,0.5)`,
              borderColor: `blue`
            };
            break;
            case 1:
            yearStyle = {
              left: 92,
              top: 25,
              position: 'relative',
              width: '40px',
              borderRadius:50,
              borderRadiusInputTopLeft:10,
              borderRadiusInputTopRight:10,
              borderRadiusInputBottomLeft:10,
              borderRadiusInputBottomRight:10,
              height: '40px',
              backgroundColor: `rgba(0,0,255,0.5)`,
              borderColor: `blue`
            };
            break;
            case 2:
            yearStyle = {
              left: 158,
              top: 25,
              position: 'relative',
              width: '40px',
              borderRadius:50,
              borderRadiusInputTopLeft:10,
              borderRadiusInputTopRight:10,
              borderRadiusInputBottomLeft:10,
              borderRadiusInputBottomRight:10,
              height: '40px',
              backgroundColor: `rgba(0,0,255,0.5)`,
              borderColor: `blue`
            };
            break;
            case 3:
            yearStyle = {
              left: 242,
              top: 25,
              position: 'relative',
              width: '40px',
              borderRadius:50,
              borderRadiusInputTopLeft:10,
              borderRadiusInputTopRight:10,
              borderRadiusInputBottomLeft:10,
              borderRadiusInputBottomRight:10,
              height: '40px',
              backgroundColor: `rgba(0,0,255,0.5)`,
              borderColor: `blue`
            };
            break;
            case 4:
            yearStyle = {
              left: 242,
              top: 25,
              position: 'relative',
              width: '40px',
              borderRadius:50,
              borderRadiusInputTopLeft:10,
              borderRadiusInputTopRight:10,
              borderRadiusInputBottomLeft:10,
              borderRadiusInputBottomRight:10,
              height: '40px',
              backgroundColor: `rgba(0,0,255,0.5)`,
              borderColor: `blue`
            };
          };

          year = 1 + datasetPosition;

          // let newData = this.state.chartData.data.labels.push();
          //
          // newData.chartData.data.datasets.forEach((dataset) => {
          //     dataset.data.push(data);
          // });
          //
          // this.setState({chartData: this.state.data}, () =>{
          //   // called when state applied
          //   setTimeout
          // })
          statePosition = datasetPosition;
        }};

        saveState() {
          playChart = false;
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
        data: [4.8],
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
            data: [-3.2],
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
        data: [215],
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
        data: [4.8, -3.4],
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
            data: [-3.2, -4.4],
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
        data: [215, 70.7],
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
        data: [4.8, -3.4, -3.5],
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
            data: [-3.2, -4.4, -2.3],
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
        data: [215, 70.7, 63.8],
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
        data: [4.8, -3.4, -3.5, 0.9],
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
            data: [-3.2, -4.4, -2.3, 6.8],
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
        data: [215, 70.7, 63.8, 94.5],
        backgroundColor:[
          '#4472c4',
          '#4472c4',
          '#4472c4',
          '#4472c4',
          '#4472c4'
        ],
      }, 4), 11000)

  }
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
                            <h2>Growth rate comparison</h2>
                            <div className="bar_graph bar_sldr">
                              {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
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
                                      suggestedMax: 250,
                                      suggestedMin: -50,
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
                           <h2>Growth rate comparison</h2>
                           <div className="bar_graph bar_sldr">
                             {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
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
                                      suggestedMax: 250,
                                      suggestedMin: -50,
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
                         <button className="button" onClick={this.props.handlePress}>
                           <img src="image/play_button.png" />
                         </button>
                         <button className="button pause_btn" onClick={this.props.handleReset}>
                           <img src="image/pause_button.png" />
                         </button>
                       </div>
                     </div>
                   </div>
           );
          }
    }
}
export default Kenya;
