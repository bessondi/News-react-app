import React, { Component } from 'react';
// import CGimg from '../img/gcPic.jpg';
// import img from '../img/gcPic.jpg';

import '../css/main.css';
import GridComponent from './gridComponent';

// let urls = [
//     "../img/cat1.jpg",
//     "../img/cat2.jpg",
//     "../img/cat3.jpg",
//     "../img/cat4.jpg",
//     "../img/cat5.jpg",
//     "../img/cat6.jpg"
// ];


class Main extends Component {
// constructor() {
//         super();
//         this.state = {
//             CGimg: '../img/gcPic.jpg'
//         };
//     }
    //{this.state.img}
    
    render() {
        return ( 
            <main>
                <div className="wrapper">
                    <div className="home">

                        <GridComponent title="Title name" text="Some text."/>
                        <GridComponent title="Title name" text="Some text."/>
                        <GridComponent title="Title name" text="Some text."/>
                        <GridComponent title="Title name" text="Some text."/>
                        <GridComponent title="Title name" text="Some text."/>
                        <GridComponent title="Title name" text="Some text."/>
 
                        {/* <div className="feature shadow">
                            <h3>1 feature</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="special shadow">
                            <h3>2 special</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="amazing shadow">
                            <h3>3 amazing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="news shadow">
                            <h3>4 news</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>

                        <div className="photos shadow">
                            <h3>5 photos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>

                        <div className="cta shadow">
                            <h3>6 cta</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div> */}

                    </div>
                </div>

                {/* <GridComponent /> */}
            </main>
        );
    }
}

export default Main;