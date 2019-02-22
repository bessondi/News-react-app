import React, {Component} from 'react';
import ArticlesTemplate from "../articlesTemplate";

import enttImg1 from "../../../img/Entt1.jpg";
import enttImg2 from "../../../img/Entt2.jpg";
import enttImg3 from "../../../img/Entt3.jpg";
import enttImg4 from "../../../img/Entt4.jpg";
import enttImg5 from "../../../img/Entt5.jpg";
import enttImg6 from "../../../img/Entt6.jpg";
import enttImg7 from "../../../img/Entt7.jpg";
import enttImg8 from "../../../img/Entt8.jpg";
import enttImg9 from "../../../img/Entt9.jpg";

export default class EntertainmentArticles extends Component {

    articlesData = [
        {
            id: 1,
            name: 'Article',
            path: '/entertainment/article1',
            dateOfPublish: '2019, 2, 1, 12, 5',
            title: 'Название статьи 1.',
            img: enttImg1,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!',
            thirdH2: 'Абзац 3',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 2,
            name: 'Article2',
            path: '/entertainment/article2',
            dateOfPublish: '2019, 2, 1, 12, 5',
            title: 'Название статьи 2.',
            img: enttImg2,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 3,
            name: 'Article3',
            path: '/entertainment/article3',
            dateOfPublish: '2019, 0, 28, 12, 5',
            title: 'Название статьи 3.',
            img: enttImg3,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!',
            thirdH2: 'Абзац 3',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 4,
            name: 'Article4',
            path: '/entertainment/article4',
            dateOfPublish: '2019, 0, 16, 12, 5',
            title: 'Название статьи 4.',
            img: enttImg4,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 5,
            name: 'Article5',
            path: '/entertainment/article5',
            dateOfPublish: '2019, 0, 1, 15, 5',
            title: 'Название статьи 5.',
            img: enttImg5,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!'
        },
        {
            id: 6,
            name: 'Article6',
            path: '/entertainment/article6',
            dateOfPublish: '2019, 1, 6, 12, 5',
            title: 'Название статьи 6.',
            img: enttImg6,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 7,
            name: 'Article7',
            path: '/entertainment/article7',
            dateOfPublish: '2019, 1, 7, 12, 5',
            title: 'Название статьи 7.',
            img: enttImg7,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 8,
            name: 'Article8',
            path: '/entertainment/article8',
            dateOfPublish: '2018, 1, 1, 12, 5',
            title: 'Название статьи 8.',
            img: enttImg8,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 9,
            name: 'Article9',
            path: '/entertainment/article9',
            dateOfPublish: '2019, 0, 1, 12, 5',
            title: 'Название статьи 9.',
            img: enttImg9,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        }
    ];

    render() {
        return (
            <React.Fragment>
                <ArticlesTemplate articles={this.articlesData} closeArticlePath='/entertainment' />
            </React.Fragment>
        );
    }
}