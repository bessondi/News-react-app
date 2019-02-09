import React, {Component} from 'react';
import GridNewsComponent from './gridNewsComponent';

import mainNewsStyle from './news.module.css';

import SPb1Img from "../../../img/SPb1.jpg";
import SPb2Img from "../../../img/SPb2.jpg";
import SPb3Img from "../../../img/SPb3.jpg";
import SPb4Img from "../../../img/SPb4.jpg";
import SPb5Img from "../../../img/SPb5.jpg";
import SPb6Img from "../../../img/SPb6.jpg";

// import AllNewsRoutes from "./singleNewsArticles/allNewsRoutes";

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                SPb1Img,
                SPb2Img,
                SPb3Img,
                SPb4Img,
                SPb5Img,
                SPb6Img
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
        const gridComponent = pictures.map( (compSrc, i) => <GridNewsComponent key={i} image={compSrc} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (
            <React.Fragment>
            {/*<AllNewsRoutes />*/}

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