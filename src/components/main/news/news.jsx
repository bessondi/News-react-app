import React, {Component} from 'react';
import GridComponent from "../gridComponent";

import NewsArticles from "./newsArticles";
import OtherNews from "./otherNews/otherNews";

import mainNewsStyle from './news.module.css';

import ImgSrc1 from "../../../img/SPb1.jpg";
import ImgSrc2 from "../../../img/SPb2.jpg";
import ImgSrc3 from "../../../img/SPb3.jpg";
import ImgSrc4 from "../../../img/SPb4.jpg";
import ImgSrc5 from "../../../img/SPb5.jpg";
import ImgSrc6 from "../../../img/SPb6.jpg";

class News extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: ImgSrc1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/news/article1'
            },
            {
                id: 2,
                picture: ImgSrc2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/news/article2'
            },
            {
                id: 3,
                picture: ImgSrc3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/news/article3'
            },
            {
                id: 4,
                picture: ImgSrc4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/news/article4'
            },
            {
                id: 5,
                picture: ImgSrc5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/news/article5'
            },
            {
                id: 6,
                picture: ImgSrc6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/news/article6'
            }
        ],
        gridStyle:  mainNewsStyle
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { elements, gridStyle } = this.state;

        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='читать' link={elements[id].link} />);

        return (
            <React.Fragment>
            <NewsArticles/>

            <main id='newsSection'>
                <div className={mainNewsStyle.wrapper}>
                    <h1 className={mainNewsStyle.sectionTitle}>НОВОСТИ ГОРОДА</h1>
                    <div className={mainNewsStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>

            <OtherNews/>
            </React.Fragment>
        );
    }
}

export default News;