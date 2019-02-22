import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import PlacesArticles from "./placesArticles";

import mainPlacesStyle from './places.module.css';

import placesImg1 from "../../../img/City1.jpg";
import placesImg2 from "../../../img/City2.jpg";
import placesImg3 from "../../../img/City3.jpg";
import placesImg4 from "../../../img/City4.jpg";
import placesImg5 from "../../../img/City5.jpg";
import placesImg6 from "../../../img/City6.jpg";

export default class Places extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: placesImg1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/places/article1'
            },
            {
                id: 2,
                picture: placesImg2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/places/article2'
            },
            {
                id: 3,
                picture: placesImg3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/places/article3'
            },
            {
                id: 4,
                picture: placesImg4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/places/article4'
            },
            {
                id: 5,
                picture: placesImg5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/places/article5'
            },
            {
                id: 6,
                picture: placesImg6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/places/article6'
            }
        ],
        gridStyle: mainPlacesStyle
    };

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