import React, {Component} from 'react';
import GridFoodComponent from './gridFoodComponent';

import mainFoodStyle from './food.module.css';

import ImgSrc1 from "../../../img/Food1.jpg";
import ImgSrc2 from "../../../img/Food2.jpg";
import ImgSrc3 from "../../../img/Food3.jpg";
import ImgSrc4 from "../../../img/Food4.jpg";
import ImgSrc5 from "../../../img/Food5.jpg";
import ImgSrc6 from "../../../img/Food6.jpg";
import ImgSrc7 from "../../../img/Food7.jpg";
import ImgSrc8 from "../../../img/Food8.jpg";

class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                ImgSrc1,
                ImgSrc2,
                ImgSrc3,
                ImgSrc4,
                ImgSrc5,
                ImgSrc6,
                ImgSrc7,
                ImgSrc8
            ],
            titles: [
                'Title food name 1',
                'Title food name 2',
                'Title food name 3',
                'Title food name 4',
                'Title food name 5',
                'Title food name 6',
                'Title food name 7',
                'Title food name 8'
            ],
            texts: [
                'Some food text 1.',
                'Some food text 2.',
                'Some food text 3.',
                'Some food text 4.',
                'Some food text 5.',
                'Some food text 6.',
                'Some food text 7.',
                'Some food text 8.'
            ],
            links: [
                '/food/article1#top',
                '/food/article2#top',
                '/food/article3#top',
                '/food/article4#top',
                '/food/article5#top',
                '/food/article6#top',
                '/food/article7#top',
                '/food/article8#top'
            ]
        }
    }

    render() {
        const { pictures, titles, texts, links } = this.state;
        const gridComponent = pictures.map( (compSrc, i) => <GridFoodComponent key={i} image={compSrc} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (

            <main id='foodSection'>
                <div className={mainFoodStyle.wrapper}>
                    <div className={mainFoodStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>

        );
    }
}

export default Food;