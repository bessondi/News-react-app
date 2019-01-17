import React, { Component } from 'react';
import GridComponent from './gridComponent';

import SPb1ImgSrc from "../../img/SPb.jpg";
import SPb2ImgSrc from "../../img/SPb1.jpg";
import SPb3ImgSrc from "../../img/SPb3.jpg";
import SPb4ImgSrc from "../../img/SPb4.jpg";
import SPb5ImgSrc from "../../img/SPb5.jpg";
import SPb6ImgSrc from "../../img/SPb6.jpg";
import mainStyle from './main.module.css';



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
            ],
            titles: [
                'Title name 1',
                'Title name 2',
                'Title name 3',
                'Title name 4',
                'Title name 5',
                'Title name 6'
            ],
            texts: [
                'Some text 1.',
                'Some text 2.',
                'Some text 3.',
                'Some text 4.',
                'Some text 5.',
                'Some text 6.'
            ]
        }
    }

    render() {

        const { pictures, titles, texts } = this.state;

        return (
            <main>
                <div className={mainStyle.wrapper}>
                    <div className={mainStyle.home}>

                        {
                            pictures.map((compSrc, i) => <GridComponent key={i} title={titles[i]} text={texts[i]} image={compSrc} link="#s" />)
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