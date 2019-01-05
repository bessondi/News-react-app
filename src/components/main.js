import React, { Component } from 'react';
import './gridComponent';

import '../css/main.css';
import GridComponent from './gridComponent';

class Main extends Component {
    render() {
        return ( 
            <main>
                <div className="wrapper">
                    <div className="home">

                        <div className="feature shadow">
                            <h3>feature</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="special shadow">
                            <h3>special</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="amazing shadow">
                            <h3>amazing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="news shadow">
                            <h3>news</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>

                        <div className="photos shadow">
                            <h3>photos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="cta shadow">
                            <h3>cta</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                    </div>
                </div>

                <GridComponent />
            </main>
        );
    }
}

export default Main;