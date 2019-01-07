import React, { Component } from 'react';
// import CGimg from '../img/gcPic.jpg';
// import logoUrl from '../img/cat1.jpg';

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

    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                require("../img/cat1.jpg"),
                require("../img/cat2.jpg"),
                require("../img/cat3.jpg"),
                require("../img/cat4.jpg"),
                require("../img/cat5.jpg"),
                require("../img/cat6.jpg")
            ]
        }
    }

    render() {

        return ( 
            <main>
                <div className="wrapper">
                    <div className="home">
                        <GridComponent title="Title name 1" text="Some text." image={this.state.pictures[0]}/>
                        <GridComponent title="Title name 2" text="Some text." image={this.state.pictures[1]}/>
                        <GridComponent title="Title name 3" text="Some text." image={this.state.pictures[2]}/>
                        <GridComponent title="Title name 4" text="Some text." image={this.state.pictures[3]}/>
                        <GridComponent title="Title name 5" text="Some text." image={this.state.pictures[4]}/>
                        <GridComponent title="Title name 6" text="Some text." image={this.state.pictures[5]}/>
 
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
            </main>
        );
    }
}

export default Main;