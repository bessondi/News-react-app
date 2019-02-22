import React, {Component} from 'react';
import GridComponent from "../gridComponent";

import mainNewsStyle from './news.module.css';

import newsImg1 from "../../../img/SPb1.jpg";
import newsImg2 from "../../../img/SPb2.jpg";
import newsImg3 from "../../../img/SPb3.jpg";
import newsImg4 from "../../../img/SPb4.jpg";
import newsImg5 from "../../../img/SPb5.jpg";
import newsImg6 from "../../../img/SPb6.jpg";
import newsImg7 from "../../../img/SPb7.jpg";
import newsImg8 from "../../../img/SPb8.jpg";
import newsImg9 from "../../../img/SPb9.jpg";
import newsImg10 from "../../../img/SPb10.jpg";
import newsImg11 from "../../../img/SPb11.jpg";
import newsImg12 from "../../../img/SPb12.jpg";


class News extends Component {
    state = {
        gridStyle:  mainNewsStyle,
        elements: [
            {
                id: 1,
                picture: newsImg1,
                title: 'Title name 1',
                text: 'Some text 1.',
                link: '/news/article1'
            },
            {
                id: 2,
                picture: newsImg2,
                title: 'Title name 2',
                text: 'Some text 2.',
                link: '/news/article2'
            },
            {
                id: 3,
                picture: newsImg3,
                title: 'Title name 3',
                text: 'Some text 3.',
                link: '/news/article3'
            },
            {
                id: 4,
                picture: newsImg4,
                title: 'Title name 4',
                text: 'Some text 4.',
                link: '/news/article4'
            },
            {
                id: 5,
                picture: newsImg5,
                title: 'Title name 5',
                text: 'Some text 5.',
                link: '/news/article5'
            },
            {
                id: 6,
                picture: newsImg6,
                title: 'Title name 6',
                text: 'Some text 6.',
                link: '/news/article6'
            }
        ],
        hiddenElements: [
            {
                id: 7,
                picture: newsImg7,
                title: 'Title name 7',
                text: 'Some text 7.',
                link: '/news/article7'
            },
            {
                id: 8,
                picture: newsImg8,
                title: 'Title name 8',
                text: 'Some text 8.',
                link: '/news/article8'
            },
            {
                id: 9,
                picture: newsImg9,
                title: 'Title name 9',
                text: 'Some text 9.',
                link: '/news/article9'
            },
            {
                id: 10,
                picture: newsImg10,
                title: 'Title name 10',
                text: 'Some text 10.',
                link: '/news/article10'
            },
            {
                id: 11,
                picture: newsImg11,
                title: 'Title name 11',
                text: 'Some text 11.',
                link: '/news/article11'
            },
            {
                id: 12,
                picture: newsImg12,
                title: 'Title name 12',
                text: 'Some text 12.',
                link: '/news/article12'
            }
        ]
    };

    addNews = () => {
        let {elements, hiddenElements} = this.state;
        elements.push(...hiddenElements);
        this.setState({ elements: elements })
    };

    render() {
        const { gridStyle, elements } = this.state;

        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='читать' link={elements[id].link} />);

        return (
            <React.Fragment>

                <main id='newsSection'>
                    <div className={mainNewsStyle.wrapper}>
                        <h1 className={mainNewsStyle.sectionTitle}>НОВОСТИ ГОРОДА</h1>
                        <div className={mainNewsStyle.home}>
                            {gridComponent}
                        </div>
                    </div>
                </main>

                 {
                     this.props.disableBtnAddNews ? null :
                     elements.length === 6 ?
                     <button onClick={ this.addNews } className={mainNewsStyle.addNews}>Показать еще новости</button> :
                     <p className={mainNewsStyle.newsRunOut}>Больше новостей нет :(</p>
                 }

            </React.Fragment>
        );
    }
}

export default News;