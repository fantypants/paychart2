import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header className="header-logo">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 logo">
                                    <img className="papl-logo" src="image/bitmap-paypl.png" />
                            </div>
                        </div>
                </div>
            </header>
        );
    };
};

export default Header;

// <img className="papl-logo" src="image/bitmap-paypl.png" /><span className="right-border"></span><img className="word-logo" src="image/bitmap.png" />
// <span className="right-border"></span>
