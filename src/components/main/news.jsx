import React, {Component} from 'react';
import GridComponent from './gridComponent';

import mainStyle from './news.module.css';

import SPb1ImgSrc from "../../img/SPb.jpg";
import SPb2ImgSrc from "../../img/SPb1.jpg";
import SPb3ImgSrc from "../../img/SPb3.jpg";
import SPb4ImgSrc from "../../img/SPb4.jpg";
import SPb5ImgSrc from "../../img/SPb5.jpg";
import SPb6ImgSrc from "../../img/SPb6.jpg";

class News extends Component {
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

        return (
            <main id='newsSection'>
                <div className={mainStyle.wrapper}>
                    <div className={mainStyle.home}>
                        {
                            pictures.map((compSrc, i) => <GridComponent key={i} image={compSrc} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />)
                        }
                    </div>
                </div>
            </main>
        );
    }
}

export default News;