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


export default class News extends Component {
    state = {
        gridStyle:  mainNewsStyle,
        elements: [
            {
                id: 1,
                picture: newsImg1,
                title: 'Весна в Петербурге',
                text: 'Главный синоптик Петербурга — о том, когда наступит весна',
                link: '/news/article1'
            },
            {
                id: 2,
                picture: newsImg2,
                title: 'Санкт-Петербург вошёл в топ-100 лучших городов мира',
                text: 'По версии World’s Best Cities 2019',
                link: '/news/article2'
            },
            {
                id: 3,
                picture: newsImg3,
                title: 'Россияне смогут посещать Японию без визы',
                text: 'При въезде в Японию без визы можно будет пребывать в стране до 90 дней',
                link: '/news/article3'
            },
            {
                id: 4,
                picture: newsImg4,
                title: 'В Эрмитаж после реставрации вернулась картина «Флора»',
                link: '/news/article4'
            },
            {
                id: 5,
                picture: newsImg5,
                title: 'Завтра можно будет наблюдать яркое суперлуние',
                text: 'В следующий раз такое может произойти через семь лет',
                link: '/news/article5'
            },
            {
                id: 6,
                picture: newsImg6,
                title: 'В честь восточного Нового года Дворцовый мост будет сиять красным цветом',
                link: '/news/article6'
            }
        ],
        hiddenElements: [
            {
                id: 7,
                picture: newsImg7,
                title: 'Спортсмен из Петербурга взял серебро Европейского юношеского олимпийского фестиваля',
                text: 'Медаль спортсмена стала первой в копилке российской сборной на этих соревнованиях',
                link: '/news/article7'
            },
            {
                id: 8,
                picture: newsImg8,
                title: 'В Анненкирхе проведут благотворительный концерт Миши Мищенко',
                link: '/news/article8'
            },
            {
                id: 9,
                picture: newsImg9,
                title: 'На Разъезжей улице заработал бар Brewmen & Redman\'s Kitchen',
                link: '/news/article9'
            },
            {
                id: 10,
                picture: newsImg10,
                title: '«Магнит» представил обновленный бренд для всех магазинов сети',
                text: 'Сети 25 лет',
                link: '/news/article10'
            },
            {
                id: 11,
                picture: newsImg11,
                title: '«Дом Бенуа» запускает два образовательных курса об ивент-индустрии',
                text: 'Два новых курса, посвященных ивент-индустрии',
                link: '/news/article11'
            },
            {
                id: 12,
                picture: newsImg12,
                title: 'Круглые столы, спектакль и выставка. В Петербурге проведут серию событий к юбилею Ахматовой',
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