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
                title: 'Сквер знаков зодиака',
                text: '12 колонн',
                link: '/places/article1'
            },
            {
                id: 2,
                picture: placesImg2,
                title: 'Главпочтамт',
                text: 'Стеклянный купол-фонарь и первый атриум Петербурга',
                link: '/places/article2'
            },
            {
                id: 3,
                picture: placesImg3,
                title: 'Усадьба Демидовых',
                text: 'Особняк в классическом стиле',
                link: '/places/article3'
            },
            {
                id: 4,
                picture: placesImg4,
                title: 'Музей-фотоателье Карла Буллы',
                link: '/places/article4'
            },
            {
                id: 5,
                picture: placesImg5,
                title: 'Доходный дом К. И. Розенштейна',
                text: 'Some text 5.',
                link: '/places/article5'
            },
            {
                id: 6,
                picture: placesImg6,
                title: 'Вокзал станции Новый Петергоф',
                text: 'Шедевр неоготики',
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