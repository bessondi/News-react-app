import React, { Component } from 'react';
import GridComponent from './gridComponent';
import '../css/main.css';

import SPb1ImgSrc from "../img/SPb.jpg";
import SPb2ImgSrc from "../img/SPb1.jpg";
import SPb3ImgSrc from "../img/SPb3.jpg";
import SPb4ImgSrc from "../img/SPb4.jpg";
import SPb5ImgSrc from "../img/SPb5.jpg";
import SPb6ImgSrc from "../img/SPb6.jpg";


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                SPb1ImgSrc,
                SPb2ImgSrc,
                SPb3ImgSrc, 
                SPb4ImgSrc,
                SPb5ImgSrc,
                SPb6ImgSrc
            ]
        }
    }

    render() {

        const {pictures} = this.state;

        return ( 
            <main>
                <div className="wrapper">
                    <div className="home">
                        {
                            pictures.map((imgSrc, i) => <GridComponent title={`Title name ${i+1}`} text="Some text." image={imgSrc} link='#'/>)
                        }

                        {/* <GridComponent title="Title name 1" text="Some text." image={this.state.pictures[0]}/>
                        <GridComponent title="Title name 2" text="Some text." image={this.state.pictures[1]}/>
                        <GridComponent title="Title name 3" text="Some text." image={this.state.pictures[2]}/>
                        <GridComponent title="Title name 4" text="Some text." image={this.state.pictures[3]}/>
                        <GridComponent title="Title name 5" text="Some text." image={this.state.pictures[4]}/>
                        <GridComponent title="Title name 6" text="Some text." image={this.state.pictures[5]}/> */}
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;