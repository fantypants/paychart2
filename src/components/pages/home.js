import React, { Component } from 'react';
import Graph_slider from'../../graph_slider';
import Argentina from'../../countries_graph/argentina';
import Colombia from'../../countries_graph/colombia';
import India from'../../countries_graph/India';
import Kenya from'../../countries_graph/Kenya';
import South_Africa from'../../countries_graph/South_Africa';
import Vietnam from'../../countries_graph/Vietnam';
import { Footer, Header } from '../common';
import Slider from "react-slick";

let mapPlay = false;
let indexTest = 0;
let currentIndex = 0;
let index = 0;
let saveIndex = 0;
let canPlay = true;
let yearStyle = {
	left: -12,
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
let year = 0;
let countryIndex = 0;

class Home extends Component {
	constructor(props) {
        super(props);
		this.play = this.play.bind(this);
		this.timesetting = 15000;
		this.mapTime = 5000;
		this.countryTimeout = 6000;
		this.padTime = 1000;
    this.pause = this.pause.bind(this);
		this.state = {div: <Argentina handlePress={this.testPlay} handleReset={this.reset} />};
		this.index = 0;
		this.runCharts = this.runCharts.bind(this);
		this.alterStyle = this.alterStyle.bind(this);
		this.executeMapYear = this.executeMapYear.bind(this);
		this.changeCountry = this.changeCountry.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}


	play() {
				console.log("play clicked");
				mapPlay =  true;
				setTimeout(this.changeCountry, 1000);
        this.slider.slickPlay();
      }



  pause() {
		console.log("pause clicked");
			mapPlay =  false;
    this.slider.slickPause();
  }

	reset(){
		canPlay = false;
	}

	handleChange = event => {
	if(event.target.value === "Argentina")
	{
		this.setState({ div: <Argentina handlePress={this.testPlay} handleReset={this.reset} />});

	}
	else if(event.target.value === "Colombia")
	{

		this.setState({ div: <Colombia handlePress={this.testPlay} handleReset={this.reset}  /> });
	}
	else if(event.target.value === "India")
	{
         this.setState({ div: <India handlePress={this.testPlay} handleReset={this.reset} /> });
	}
	else if(event.target.value === "Kenya")
	{
         this.setState({ div: <Kenya handlePress={this.testPlay} handleReset={this.reset} /> });
	}
	else if(event.target.value === "South Africa")
	{
         this.setState({ div: <South_Africa handlePress={this.testPlay} handleReset={this.reset} /> });
	}
	else
	{
        this.setState({ div: <Vietnam handlePress={this.testPlay} handleReset={this.reset} /> });
	}
  };


	runCharts() {
		indexTest = saveIndex;
		index = indexTest;

		switch(index){
			case 0:
			if(canPlay == true){
				document.getElementById('countries').selectedIndex = 1;
				this.setState({div: <Argentina handlePress={this.testPlay} handleReset={this.reset} />});
				indexTest = index + 1;
				saveIndex = indexTest;
				break;
			}

			case 1:
			if(canPlay == true){
				this.setState({div: <Colombia handlePress={this.testPlay} handleReset={this.reset} />});
				document.getElementById('countries').selectedIndex = 2;
				indexTest = index + 1;
				saveIndex = indexTest;
				break;
			}

			case 2:
			if(canPlay == true){
				this.setState({div: <India handlePress={this.testPlay} handleReset={this.reset} />});
				document.getElementById('countries').selectedIndex = 3;
				indexTest = index + 1;
				saveIndex = indexTest;
				break;
			}

			case 3:
			if(canPlay == true){
				this.setState({div: <Kenya handlePress={this.testPlay} handleReset={this.reset} />});
				document.getElementById('countries').selectedIndex = 4;
				indexTest = index + 1;
				saveIndex = indexTest;
				break;
			}

			case 4:
			if(canPlay == true){
				this.setState({div: <South_Africa handlePress={this.testPlay} handleReset={this.reset} />});
				document.getElementById('countries').selectedIndex = 5;
				indexTest = index + 1;
				saveIndex = indexTest;
				break;
			}

			case 5:
			if(canPlay == true){
				this.setState({div: <Vietnam handlePress={this.testPlay} handleReset={this.reset} />});
				document.getElementById('countries').selectedIndex = 6;
				indexTest = 0;
				saveIndex = indexTest;
				index = 0;
				break;
			}
		}
			setTimeout(this.runCharts, this.timesetting);
		};

		testPlay() {
			canPlay = true;
		}

		alterStyle(left) {
			yearStyle = {
				left: left,
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
		}


		executeMapYear() {

			switch(year) {
	      case 0:
				if(mapPlay == true){
				year = year + 1;
				this.alterStyle(-12);
				currentIndex = 0;
	      break;
				}

	      case 1:
				if(mapPlay == true){
				year = year + 1;
				this.alterStyle(62);
				currentIndex = 1;
	      break;
				}

	      case 2:
				if(mapPlay == true){
				year = year + 1;
				this.alterStyle(138);
				currentIndex = 2;
	      break;
				}

	      case 3:
				if(mapPlay == true){
				year = year + 1;
				this.alterStyle(212);
				currentIndex = 3;
	      break;
				}

	      case 4:
				if(mapPlay == true){
				year = 0;
				this.alterStyle(286);
				currentIndex = 4;
			}
	    }
			if(mapPlay == true){
				if(year !== 4){
					setTimeout(this.executeMapYear, this.padTime);
				}
			this.slider.slickGoTo(currentIndex)
				}
		}


		changeCountry() {

			switch(countryIndex){
				case 0:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 0;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 1:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 1;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 2:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 2;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 3:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 3;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 4:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 4;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 5:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 5;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 6:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 6;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 7:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 7;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 8:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 8;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 9:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 9;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 10:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 10;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 11:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 11;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 12:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 12;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 13:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 13;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 14:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 14;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 15:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 15;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 16:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 16;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 17:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 17;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 18:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 18;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 19:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 19;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 20:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 20;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 21:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 21;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 22:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 22;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 23:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 23;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 24:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 24;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 25:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 25;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 26:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 26;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 27:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 27;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 28:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 28;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
				}

				case 29:
				if(mapPlay == true){
				year = 0;
				currentIndex = 0;
				document.getElementById('countryChange').selectedIndex = 29;
				setTimeout(this.executeMapYear, this.mapTime);
				countryIndex = countryIndex + 1;
				setTimeout(this.changeCountry, this.countryTimeout);
				break;
			}}
			year = 0;
			yearStyle = {
				left: -12,
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
		}


	componentDidMount(){
		index = 0;
		saveIndex = 0;
		setTimeout(this.runCharts, 1000);
		//setTimeout(this.executeMapYear, 5000);
		//setTimeout(this.changeCountry, 1000);
	};





  		render(){
			const settings = {
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
        accessibility:true,
        autoplay: false,
        arrrows:true,
				//autoplaySpeed: 5000
			};
			  	return(
                <div className="page-sec">
                            <Header />
			            	<div className="content-section">
								<section id="first_sec" className="sec_first">
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12 full_watch">
												<div className="watch_text">
													Watch how Merchants on <span className="paypal_text2">Paypal</span> survive and thrive compared to offline merchants.
												</div>
											</div>
											<div className="blue-border"></div>
											<div className="col-sm-12 button_sec">
												<div className="papal_buttn"><a href="">Download the full report</a></div>
											</div>
											<div className="col-sm-12 scroll_cntnu">
												<div className="scroll_text">Scroll to continue</div>
												<div className="swipe_text">Swipe to continue</div>
												<div class="scroll_icon"><a href="#second_sec"><img src="image/scroll_one.png" /></a></div>
												<div class="black-border"></div>
											</div>
										</div>
									</div>
								</section>
								<section id="second_sec" className="sec_second">
									<div className="container-fluid select-fluid">
										<div className="row">
											<div className="col-xs-12 col-sm-12 col-md-6 cont_prt">
												<div class="count_img"><img src="image/count_two.png" /></div>
											</div>
											<div className="col-xs-12 col-sm-12 col-md-6 select_prt">
												<div class="select_option">
													<span class="fancyArrow"></span>
													<select id="countries" className="graph_cntry_slct" onChange={this.handleChange}>
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
									<div className="row bargraph">
										<div className="col-md-6 cont_textprt">
											<div className="container-fluid custum-fluid">
												<div className="row custom_row_margin">
													<div class="bar_text">
														Merchants on Paypal <span className="grow-text">grow considerably</span> more than national indexes and non Paypal merchants.
													</div>
													<div class="single_line"></div>
													<div className="lorem-text">
														<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
														<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 bar_prt">
											<Graph_slider  div={this.state.div} />
											 {/* <div class="bar_graph"><img src={require('./image/bar_graph.png')} /></div>
											<div class="mobile_bar"><img src={require('./image/mobil_bar.png')} /></div>  */}
										</div>
									</div>
									<div className="container-fluid carousel-fluid" data-interval="false" >
										<div className="row carousel-row" data-interval="false" >
											<div className="col-sm-12">
												<div className="carousel_custom1" data-interval="false" >
													{/* <img src={require('./image/carousel_btn.png')} /> */}
													<span className="merchant">In 2016, merchants on Paypal in Argentina grew by X%, greater than 8x over [other index]</span>
												</div>
												{/* <div className="carousel_custom2">
													<img src="image/carousel_itm.png" />
												</div> */}
											</div>
											<div className="col-sm-12 scroll_second">
												<div className="scroll_text">Scroll to continue</div>
												<div class="scroll_icon"><a href="#"><img src='image/scroll_one.png' /></a></div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 scroll_mobiles">
												<div class="scroll_icon"><a href="#"><img src="image/scroll_one.png" /></a></div>
												<div class="black-border"></div>
									</div>
								</section>
								<section id="third_sec" className="sec_third">
									<div className="row bargraph">
										<div className="col-md-3 cont_textprt">
											<div className="container-fluid tcustum-fluid">
												<div className="row">
													<div className="cntbr_txt">
														<div className="cont_prt">
															<div class="scount_img"><img src="image/count_one.png" /></div>
														</div>
														<div class="bar_text">
															Cross border trade is <span className="grow-text">booming</span> for merchants who use Paypal.
														</div>
													</div>
													<div className="single_line mobile_line"></div>
													<div className="lorem-text">
														<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
														<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
													</div>
												</div>
												<div class="map_notification">
													<img src="image/notifi.png" />
												</div>
											</div>
										</div>
										<div className="col-md-9 map_prt">
											<div className="select_sprt">
												<div className="select_option">
													<span className="fancyArrow"></span>
													<select id="countryChange" className="cntry_slct">
													<option value="usa_states">USA</option>
													<option value="india_states">India</option>
													<option value="belgium_states">Belgium</option>
													<option value="bulgaria_states">Bulgaria</option>
													<option value="Czech_republic_states">Czech republic</option>
													<option value="denmark_states">Denmark</option>
													<option value="germany_states">Germany</option>
													<option value="estonia_states">Estonia</option>
													<option value="ireland_states">Ireland</option>
													<option value="greece_states">Greece</option>
													<option value="great_Britain_states">Great Britain</option>
													<option value="spain_states">Spain</option>
													<option value="france_states">France</option>
													<option value="croatia_states">Croatia</option>
													<option value="italy_states">Italy</option>
													<option value="cyprus_states">Cyprus</option>
													<option value="latvia_states">Latvia</option>
													<option value="lithuania_states">Lithuania</option>
													<option value="luxembourg_states">Luxembourg</option>
													<option value="hungaria_states">Hungaria</option>
													<option value="malta_states">Malta</option>
													<option value="netherlands_states">Netherlands</option>
													<option value="austria_states">Austria</option>
													<option value="poland_states">Poland</option>
													<option value="portugal_states">Portugal</option>
													<option value="romania_states">Romania</option>
													<option value="slovakia_states">Slovakia</option>
													<option value="finland_states">Finland</option>
													<option value="sweden_states">Sweden</option>
													<option value="canada_states">Canada</option>
													</select>
												</div>
											</div>
											<div class="year-wrap">
											<div class="test0">2013</div>
											<div class="test1">2014</div>
											<div class="test2">2015</div>
											<div class="test3">2016</div>
											<div class="test4">2017</div>
											</div>
											<div class="smap">

												<Slider ref={slider => (this.slider = slider)} {...settings}>

													<div className="mapcontainer">

														<div className="map">
														</div>
													</div>
													<div className="mapcontainer">
														<div className="year_dot_map2">2017</div>
														<div className="map">
														</div>
													</div>
													<div className="mapcontainer">
														<div className="year_dot_map2">2017</div>
														<div className="map">
														</div>
													</div>
													<div className="mapcontainer">
														<div className="year_dot_map2">2017</div>
														<div className="map">
														</div>
													</div>
													<div className="mapcontainer">
														<div className="year_dot_map2">2017</div>
														<div className="map">
														</div>
													</div>
												</Slider>
											</div>
										</div>
										<div className="container-fluid ncarousel-fluid">
											<div className="row">
												<div className="scarousel_custom">
													<div className="carousel_custom1">
														{/* <img src="image/carousel_btn.png" /> */}
														<div className="ply_pause_btn_map" style={{ textAlign: "center" }}>
															<div className="both_ply_pause_map">
															<button className="button" onClick={this.play}>
																<img src="image/play_button.png" />
															</button>
															<button className="button pause_btn" onClick={this.pause}>
																<img src="image/pause_button.png" />
															</button>
															</div>
														</div>
														<span className="merchant">In 2016, merchants on Paypal in Argentina grew by X%, greater than 8x over [other index]</span>
													</div>

													<div className="carousel_custom2">
														{/* <img src="image/carousel_itm.png" /> */}
														<div className="slider_whole_dot_map">
															<div id="mapYear" className="timeline" style={yearStyle}>
			                        </div>
															<a className="button frst_sld"  onClick={e => this.slider.slickGoTo(0)}>
															<div className="sldr_dot"></div>
															<div class="sldr_line_map"></div>
															<div className="year_dot_map">2013</div>
															</a>
															<a className="button frst_sld"  onClick={e => this.slider.slickGoTo(1)}>
															<div className="sldr_dot"></div>
															<div class="sldr_line_map"></div>
															<div className="year_dot_map">2014</div>
															</a>
															<a className="button frst_sld"  onClick={e => this.slider.slickGoTo(2)}>
															<div className="sldr_dot"></div>
															<div class="sldr_line_map"></div>
															<div className="year_dot_map">2015</div>
															</a>
															<a className="button frst_sld"  onClick={e => this.slider.slickGoTo(3)}>
															<div className="sldr_dot"></div>
															<div class="sldr_line_map"></div>
															<div className="year_dot_map">2016</div>
															</a>
															<a className="button frst_sld"  onClick={e => this.slider.slickGoTo(4)}>
															<div className="sldr_dot"></div>
															<div class="sldr_line_map sldr_line_last"></div>
															<div className="year_dot_map">2017</div>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row map-continue container-fluid">
											<div className="col-sm-12 scroll_second">
												<div className="scroll_text">Scroll to begin</div>
												<div class="scroll_icon"><a href="#"><img src="image/scroll_one.png" /></a></div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 scroll_mobiles">
										<div class="scroll_icon"><a href="#"><img src="image/scroll_one.png" /></a></div>
										<div class="black-border"></div>
									</div>
								</section>
								<Footer />
            				</div>
                        </div>
        	);
  		}
}
export default Home;
