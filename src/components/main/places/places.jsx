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
                title: 'Казанский кафедральный собор',
                text: 'Ампир и классицизм',
                link: '/places/article1'
            },
            {
                id: 2,
                picture: placesImg2,
                title: 'Петропавловская крепость',
                text: 'Историческое ядро города.',
                link: '/places/article2'
            },
            {
                id: 3,
                picture: placesImg3,
                title: 'Исаакиевский собор',
                text: 'Шедевр архитектуры',
                link: '/places/article3'
            },
            {
                id: 4,
                picture: placesImg4,
                title: 'Петергоф',
                text: 'Императорская загородная резиденция',
                link: '/places/article4'
            },
            {
                id: 5,
                picture: placesImg5,
                title: 'Государственный Эрмитаж',
                text: 'Музей изобразительного и декоративно-прикладного искусства',
                link: '/places/article5'
            },
            {
                id: 6,
                picture: placesImg6,
                title: 'Мариинский театр',
                text: 'Один из ведущих музыкальных театров России и мира',
                link: '/places/article6'
            }
        ],
        gridStyle: mainPlacesStyle
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
        )
    }
}