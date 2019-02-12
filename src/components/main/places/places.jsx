import React, {Component} from 'react';
import GridPlacesComponent from './gridPlacesComponent';
import PlacesArticles from "./placesArticles";

import mainPlacesStyle from './places.module.css';

import ImgSrc1 from "../../../img/City1.jpg";
import ImgSrc2 from "../../../img/City2.jpg";
import ImgSrc3 from "../../../img/City3.jpg";
import ImgSrc4 from "../../../img/City4.jpg";
import ImgSrc5 from "../../../img/City5.jpg";
import ImgSrc6 from "../../../img/City6.jpg";

class Places extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                ImgSrc1,
                ImgSrc2,
                ImgSrc3,
                ImgSrc4,
                ImgSrc5,
                ImgSrc6
            ],
            titles: [
                'Title places name 1',
                'Title places name 2',
                'Title places name 3',
                'Title places name 4',
                'Title places name 5',
                'Title places name 6'
            ],
            texts: [
                'Some places text 1.',
                'Some places text 2.',
                'Some places text 3.',
                'Some places text 4.',
                'Some places text 5.',
                'Some places text 6.'
            ],
            links: [
                '/places/article1#top',
                '/places/article2#top',
                '/places/article3#top',
                '/places/article4#top',
                '/places/article5#top',
                '/places/article6#top'
            ]
        }
    }

    render() {
        const { pictures, titles, texts, links } = this.state;
        const gridComponent = pictures.map( (img, i) => <GridPlacesComponent key={i} image={img} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (
            <React.Fragment>
            <PlacesArticles/>

            <main id='placesSection'>
                <div className={mainPlacesStyle.wrapper}>
                    <div className={mainPlacesStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>
            </React.Fragment>
        );
    }
}

export default Places;