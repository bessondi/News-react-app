import React, {Component} from 'react';
import GridComponent from "../gridComponent";
import FoodArticles from "./foodArticles";

import mainFoodStyle from './food.module.css';

import foodImg1 from "../../../img/Food1.jpg";
import foodImg2 from "../../../img/Food2.jpg";
import foodImg3 from "../../../img/Food3.jpg";
import foodImg4 from "../../../img/Food4.jpg";
import foodImg5 from "../../../img/Food5.jpg";
import foodImg6 from "../../../img/Food6.jpg";
import foodImg7 from "../../../img/Food7.jpg";
import foodImg8 from "../../../img/Food8.jpg";
import foodImg9 from "../../../img/Food9.jpg";

export default class Food extends Component {
    state = {
        elements: [
            {
                id: 1,
                picture: foodImg1,
                title: 'Лучшие эклеры Петербурга — от самого дешевого до самого дорогого',
                text: 'от 35 до 350 рублей',
                link: '/food/article1'
            },
            {
                id: 2,
                picture: foodImg2,
                title: 'Где пить кофе в Петербурге',
                text: 'Больше 30 авторских кофеен, брю-баров и концептуальных сетей',
                link: '/food/article2'
            },
            {
                id: 3,
                picture: foodImg3,
                title: 'Ход конем: Petrov-Vodkin на Адмиралтейском проспекте',
                text: 'Русский ресторан без русского китча для туристов и местных',
                link: '/food/article3'
            },
            {
                id: 4,
                picture: foodImg8,
                title: 'Что такое вермут и как его пить?',
                text: 'Как разобраться в одном из самых модных напитков 2019 года',
                link: '/food/article4'
            },
            {
                id: 5,
                picture: foodImg5,
                title: 'Как сварить эспрессо дома',
                text: 'Можно ли сварить дома крепкий кофе, и нужно ли',
                link: '/food/article5'
            },
            {
                id: 6,
                picture: foodImg6,
                title: 'Как сделать десерт «Павлова» дома',
                text: 'Красивый и простой десерт своими руками',
                link: '/food/article6'
            },
            {
                id: 7,
                picture: foodImg7,
                title: 'Остерия Locale во «Владимирском пассаже»',
                text: 'Демократичный итальянский ресторан с самодельной пастой',
                link: '/food/article7'
            },
            {
                id: 8,
                picture: foodImg4,
                title: '6 новых мест с хорошей пиццей в Петербурге',
                text: 'Где, кроме Camorra, «22 сантиметров» и «Форно браво!», искать любимое блюдо',
                link: '/food/article8'
            },
            {
                id: 9,
                picture: foodImg9,
                title: 'Где есть вьетнамский суп фо-бо в Петербурге',
                text: 'Модные гастропабы',
                link: '/food/article9'
            }
        ],
        gridStyle: mainFoodStyle
    };

    render() {
        const { elements, gridStyle } = this.state;
        const gridComponent = elements.map( (picture, id) => <GridComponent key={id} style={gridStyle} image={elements[id].picture} title={elements[id].title} text={elements[id].text} hidden='посетить' link={elements[id].link} />);

        return (
            <React.Fragment>
            <FoodArticles/>

            <main id='foodSection'>
                <div className={mainFoodStyle.wrapper}>
                    <h1 className={mainFoodStyle.sectionTitle}>РЕСТОРАНЫ И БАРЫ</h1>
                    <div className={mainFoodStyle.home}>
                        {gridComponent}
                    </div>
                </div>
            </main>

            </React.Fragment>
        );
    }
}