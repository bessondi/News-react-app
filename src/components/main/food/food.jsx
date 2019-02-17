import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import FoodArticles from "./foodArticles";

import mainFoodStyle from './food.module.css';

import ImgSrc1 from "../../../img/Food1.jpg";
import ImgSrc2 from "../../../img/Food2.jpg";
import ImgSrc3 from "../../../img/Food3.jpg";
import ImgSrc4 from "../../../img/Food4.jpg";
import ImgSrc5 from "../../../img/Food5.jpg";
import ImgSrc6 from "../../../img/Food6.jpg";
import ImgSrc7 from "../../../img/Food7.jpg";
import ImgSrc8 from "../../../img/Food8.jpg";
import ImgSrc9 from "../../../img/Food9.jpg";

class Food extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: ImgSrc1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/food/article1'
            },
            {
                id: 2,
                picture: ImgSrc2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/food/article2'
            },
            {
                id: 3,
                picture: ImgSrc3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/food/article3'
            },
            {
                id: 4,
                picture: ImgSrc4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/food/article4'
            },
            {
                id: 5,
                picture: ImgSrc5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/food/article5'
            },
            {
                id: 6,
                picture: ImgSrc6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/food/article6'
            },
            {
                id: 7,
                picture: ImgSrc7,
                title: 'Title name 7',
                text: 'Some text 7.',
                link: '/food/article7'
            },
            {
                id: 8,
                picture: ImgSrc8,
                title: 'Title name 8',
                text: 'Some text 8.',
                link: '/food/article8'
            },
            {
                id: 9,
                picture: ImgSrc9,
                title: 'Title name 9',
                text: 'Some text 9.',
                link: '/food/article9'
            }
        ],
        gridStyle: mainFoodStyle
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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

export default Food;