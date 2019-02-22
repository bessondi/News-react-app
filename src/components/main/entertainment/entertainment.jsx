import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import EntertainmentArticles from "./entertainmentArticles";

import mainEnttStyle from './entertainment.module.css';

import enttImg1 from "../../../img/Entt1.jpg";
import enttImg2 from "../../../img/Entt2.jpg";
import enttImg3 from "../../../img/Entt3.jpg";
import enttImg4 from "../../../img/Entt4.jpg";
import enttImg5 from "../../../img/Entt5.jpg";
import enttImg6 from "../../../img/Entt6.jpg";
import enttImg7 from "../../../img/Entt7.jpg";
import enttImg8 from "../../../img/Entt8.jpg";
import enttImg9 from "../../../img/Entt9.jpg";

class Entertainment extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: enttImg1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/entertainment/article1'
            },
            {
                id: 2,
                picture: enttImg2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/entertainment/article2'
            },
            {
                id: 3,
                picture: enttImg3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/entertainment/article3'
            },
            {
                id: 4,
                picture: enttImg4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/entertainment/article4'
            },
            {
                id: 5,
                picture: enttImg5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/entertainment/article5'
            },
            {
                id: 6,
                picture: enttImg6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/entertainment/article6'
            },
            {
                id: 7,
                picture: enttImg7,
                title: 'Title name 7',
                text: 'Some text 7.',
                link: '/entertainment/article7'
            },
            {
                id: 8,
                picture: enttImg8,
                title: 'Title name 8',
                text: 'Some text 8.',
                link: '/entertainment/article8'
            },
            {
                id: 9,
                picture: enttImg9,
                title: 'Title name 9',
                text: 'Some text 9.',
                link: '/entertainment/article9'
            }
        ],
        gridStyle: mainEnttStyle
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { elements, gridStyle } = this.state;

        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='найти' link={elements[id].link} />);

        return (
            <React.Fragment>
            <EntertainmentArticles/>

            <main id='entertainmentSection'>
                <div className={mainEnttStyle.wrapper}>
                    <h1 className={mainEnttStyle.sectionTitle}>ВСЕ РАЗВЛЕЧЕНИЯ</h1>
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