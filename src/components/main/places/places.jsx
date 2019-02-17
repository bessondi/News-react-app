import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import PlacesArticles from "./placesArticles";

import mainPlacesStyle from './places.module.css';

import ImgSrc1 from "../../../img/City1.jpg";
import ImgSrc2 from "../../../img/City2.jpg";
import ImgSrc3 from "../../../img/City3.jpg";
import ImgSrc4 from "../../../img/City4.jpg";
import ImgSrc5 from "../../../img/City5.jpg";
import ImgSrc6 from "../../../img/City6.jpg";

class Places extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: ImgSrc1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/places/article1'
            },
            {
                id: 2,
                picture: ImgSrc2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/places/article2'
            },
            {
                id: 3,
                picture: ImgSrc3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/places/article3'
            },
            {
                id: 4,
                picture: ImgSrc4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/places/article4'
            },
            {
                id: 5,
                picture: ImgSrc5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/places/article5'
            },
            {
                id: 6,
                picture: ImgSrc6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/places/article6'
            }
        ],
        gridStyle: mainPlacesStyle
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { elements, gridStyle } = this.state;
        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='смотреть' link={elements[id].link} />);

        return (
            <React.Fragment>
            <PlacesArticles/>

            <main id='placesSection'>
                <div className={mainPlacesStyle.wrapper}>
                    <h1 className={mainPlacesStyle.sectionTitle}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ ГОРОДА</h1>
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