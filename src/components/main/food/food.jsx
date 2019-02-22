import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import FoodArticles from "./foodArticles";

import mainFoodStyle from './food.module.css';

import foodImg1 from "../../../img/Food1.jpg";
import foodImg2 from "../../../img/Food2.jpg";
import foodImg3 from "../../../img/Food3.jpg";
import foodImg4 from "../../../img/Food4.jpg";
import foodImg5 from "../../../img/Food5.jpg";
import foodImg6 from "../../../img/Food6.jpg";
import foodImg7 from "../../../img/Food7.jpg";
import foodImg8 from "../../../img/Food8.jpg";
import foodImg9 from "../../../img/Food9.jpg";

export default class Food extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: foodImg1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/food/article1'
            },
            {
                id: 2,
                picture: foodImg2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/food/article2'
            },
            {
                id: 3,
                picture: foodImg3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/food/article3'
            },
            {
                id: 4,
                picture: foodImg4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/food/article4'
            },
            {
                id: 5,
                picture: foodImg5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/food/article5'
            },
            {
                id: 6,
                picture: foodImg6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/food/article6'
            },
            {
                id: 7,
                picture: foodImg7,
                title: 'Title name 7',
                text: 'Some text 7.',
                link: '/food/article7'
            },
            {
                id: 8,
                picture: foodImg8,
                title: 'Title name 8',
                text: 'Some text 8.',
                link: '/food/article8'
            },
            {
                id: 9,
                picture: foodImg9,
                title: 'Title name 9',
                text: 'Some text 9.',
                link: '/food/article9'
            }
        ],
        gridStyle: mainFoodStyle
    };

    render() {
        const { elements, gridStyle } = this.state;
        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='посетить' link={elements[id].link} />);

        return (
            <React.Fragment>
            <FoodArticles/>

            <main id='foodSection'>
                <div className={mainFoodStyle.wrapper}>
                    <h1 className={mainFoodStyle.sectionTitle}>РЕСТОРАНЫ И БАРЫ</h1>
                    <div className={mainFoodStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>

            </React.Fragment>
        );
    }
}