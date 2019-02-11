import React, {Component} from 'react';
import GridNewsComponent from './gridNewsComponent';
import NewsArticles from "./newsArticles";

import mainNewsStyle from './news.module.css';

import newsImg1 from "../../../img/SPb1.jpg";
import newsImg2 from "../../../img/SPb2.jpg";
import newsImg3 from "../../../img/SPb3.jpg";
import newsImg4 from "../../../img/SPb4.jpg";
import newsImg5 from "../../../img/SPb5.jpg";
import newsImg6 from "../../../img/SPb6.jpg";

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                newsImg1,
                newsImg2,
                newsImg3,
                newsImg4,
                newsImg5,
                newsImg6
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
            ],
            links: [
                '/news/article1#top',
                '/news/article2#top',
                '/news/article3#top',
                '/news/article4#top',
                '/news/article5#top',
                '/news/article6#top'
            ]
        }
    }

    render() {
        const { pictures, titles, texts, links } = this.state;
        const gridComponent = pictures.map( (img, i) => <GridNewsComponent key={i} image={img} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (
            <React.Fragment>
            <NewsArticles/>

            <main id='newsSection'>
                <div className={mainNewsStyle.wrapper}>
                    <div className={mainNewsStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>
            </React.Fragment>
        );
    }
}

export default News;