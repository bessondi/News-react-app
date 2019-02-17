import React, {Component} from 'react';
import {Route} from "react-router-dom";
import GridComponent from "../../gridComponent";

import otherNewsStyle from './otherNews.module.css';

import ImgSrc1 from "../../../../img/SPb1.jpg";
import ImgSrc2 from "../../../../img/SPb2.jpg";
import ImgSrc3 from "../../../../img/SPb3.jpg";
import ImgSrc4 from "../../../../img/SPb4.jpg";
import ImgSrc5 from "../../../../img/SPb5.jpg";
import ImgSrc6 from "../../../../img/SPb6.jpg";

class OtherNews extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: ImgSrc6,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/news/article7'
            },
            {
                id: 2,
                picture: ImgSrc5,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/news/article8'
            },
            {
                id: 3,
                picture: ImgSrc4,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/news/article9'
            },
            {
                id: 4,
                picture: ImgSrc3,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/news/article10'
            },
            {
                id: 5,
                picture: ImgSrc2,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/news/article11'
            },
            {
                id: 6,
                picture: ImgSrc1,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/news/article12'
            }
        ]
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { elements } = this.state;

        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='читать' link={elements[id].link} />);

        const othNewsComp = () => {
            return (
                <main id='otherNewsSection'>
                    <div className={otherNewsStyle.wrapper}>
                        {/*<h2 className={otherNewsStyle.sectionTitle}>ОСТАЛЬНЫЕ НОВОСТИ</h2>*/}
                        <div className={otherNewsStyle.home}>
                            {gridComponent}
                        </div>
                    </div>
                </main>

            )
        };

        return (
            <Route exact path='news/otherNews' component={othNewsComp} />
        );
    }
}

export default OtherNews;