import React, {Component} from 'react';
import GridEnttComponent from './gridEnttComponent';

import mainEnttStyle from './entertainment.module.css';

import ImgSrc1 from "../../../img/Entt1.jpg";
import ImgSrc2 from "../../../img/Entt2.jpg";
import ImgSrc3 from "../../../img/Entt3.jpg";
import ImgSrc4 from "../../../img/Entt4.jpg";
import ImgSrc5 from "../../../img/Entt5.jpg";
import ImgSrc6 from "../../../img/Entt6.jpg";
import ImgSrc7 from "../../../img/Entt7.jpg";
import ImgSrc8 from "../../../img/Entt8.jpg";
import ImgSrc9 from "../../../img/Entt9.jpg";
import NewsArticles from "../news/newsArticles";
import EntertainmentArticles from "./entertainmentArticles";

class Entertainment extends Component {
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
                ImgSrc8,
                ImgSrc9
            ],
            titles: [
                'Title entertainment name 1',
                'Title entertainment name 2',
                'Title entertainment name 3',
                'Title entertainment name 4',
                'Title entertainment name 5',
                'Title entertainment name 6',
                'Title entertainment name 7',
                'Title entertainment name 8',
                'Title entertainment name 9'
            ],
            texts: [
                'Some entertainment text 1.',
                'Some entertainment text 2.',
                'Some entertainment text 3.',
                'Some entertainment text 4.',
                'Some entertainment text 5.',
                'Some entertainment text 6.',
                'Some entertainment text 7.',
                'Some entertainment text 8.',
                'Some entertainment text 9.'
            ],
            links: [
                '/entertainment/article1#top',
                '/entertainment/article2#top',
                '/entertainment/article3#top',
                '/entertainment/article4#top',
                '/entertainment/article5#top',
                '/entertainment/article6#top',
                '/entertainment/article7#top',
                '/entertainment/article8#top',
                '/entertainment/article9#top'
            ]
        }
    }

    render() {
        const { pictures, titles, texts, links } = this.state;
        const gridComponent = pictures.map( (compSrc, i) => <GridEnttComponent key={i} image={compSrc} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (
            <React.Fragment>
            <EntertainmentArticles/>

            <main id='entertainmentSection'>
                <div className={mainEnttStyle.wrapper}>
                    <div className={mainEnttStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>
            </React.Fragment>
        );
    }
}

export default Entertainment;