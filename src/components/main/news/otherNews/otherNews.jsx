import React, {Component} from 'react';
import {Route} from "react-router-dom";
import GridComponent from "../../gridComponent";

import otherNewsStyle from './otherNews.module.css';

import ImgSrc7 from "../../../../img/SPb7.jpg";
import ImgSrc8 from "../../../../img/SPb8.jpg";
import ImgSrc9 from "../../../../img/SPb9.jpg";
import ImgSrc10 from "../../../../img/SPb10.jpg";
import ImgSrc11 from "../../../../img/SPb11.jpg";
import ImgSrc12 from "../../../../img/SPb12.jpg";

class OtherNews extends Component {
    state = {
        newElements: [
            {
                id: 1,
                picture: ImgSrc7,
                title: 'Title name 7',
                text: 'Some text 7.',
                link: '/news/article7'
            },
            {
                id: 2,
                picture: ImgSrc8,
                title: 'Title name 8',
                text: 'Some text 8.',
                link: '/news/article8'
            },
            {
                id: 3,
                picture: ImgSrc9,
                title: 'Title name 9',
                text: 'Some text 9.',
                link: '/news/article9'
            },
            {
                id: 4,
                picture: ImgSrc10,
                title: 'Title name 10',
                text: 'Some text 10.',
                link: '/news/article10'
            },
            {
                id: 5,
                picture: ImgSrc11,
                title: 'Title name 11',
                text: 'Some text 11.',
                link: '/news/article11'
            },
            {
                id: 6,
                picture: ImgSrc12,
                title: 'Title name 12',
                text: 'Some text 12.',
                link: '/news/article12'
            }
        ],
        gridStyle: otherNewsStyle
    };

    render() {
        const { elements, gridStyle } = this.state;

        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='читать' link={elements[id].link} />);

        // const othNewsComp = () => {
            return (
                <main id='otherNewsSection'>
                    <div className={otherNewsStyle.wrapper}>
                        <div className={otherNewsStyle.home}>
                            {gridComponent}
                        </div>
                    </div>
                </main>

            )
        };

    //     return (
    //         <Route path='news/otherNews' component={othNewsComp} />
    //     );
    // }
}

export default OtherNews;