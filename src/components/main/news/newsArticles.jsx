import React, {Component} from 'react';
import ArticlesTemplate from "../articlesTemplate";

import Img1 from "../../../img/SPb1.jpg";
import Img2 from "../../../img/SPb2.jpg";
import Img3 from "../../../img/SPb3.jpg";
import Img4 from "../../../img/SPb4.jpg";
import Img5 from "../../../img/SPb5.jpg";
import Img6 from "../../../img/SPb6.jpg";
import Img7 from "../../../img/SPb7.jpg";
import Img8 from "../../../img/SPb8.jpg";
import Img9 from "../../../img/SPb9.jpg";
import Img10 from "../../../img/SPb10.jpg";
import Img11 from "../../../img/SPb11.jpg";
import Img12 from "../../../img/SPb12.jpg";

export default class NewsArticles extends Component {

    articlesData = [
        {
            id: 1,
            name: 'Article',
            path: '/news/article1',
            dateOfPublish: '2019, 1, 15, 12, 0',
            title: 'Название статьи 1.',
            img: `${Img1}`,
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
            dateOfPublish: '2019, 1, 14, 7, 0',
            path: '/news/article2',
            title: 'Название статьи 2.',
            img: `${Img2}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 3,
            name: 'Article3',
            dateOfPublish: '2019, 1, 13, 15, 0',
            path: '/news/article3',
            title: 'Название статьи 3.',
            img: `${Img3}`,
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
            dateOfPublish: '2019, 0, 13, 15, 0',
            path: '/news/article4',
            title: 'Название статьи 4.',
            img: `${Img4}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 5,
            name: 'Article5',
            dateOfPublish: '2019, 0, 1, 3, 0',
            path: '/news/article5',
            title: 'Название статьи 5.',
            img: `${Img5}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!'
        },
        {
            id: 6,
            name: 'Article6',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article6',
            title: 'Название статьи 6.',
            img: `${Img6}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 7,
            name: 'Article7',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article7',
            title: 'Название статьи 7.',
            img: `${Img7}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 8,
            name: 'Article8',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article8',
            title: 'Название статьи 8.',
            img: `${Img8}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 9,
            name: 'Article9',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article9',
            title: 'Название статьи 9.',
            img: `${Img9}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 10,
            name: 'Article10',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article10',
            title: 'Название статьи 10.',
            img: `${Img10}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 11,
            name: 'Article11',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article11',
            title: 'Название статьи 11.',
            img: `${Img11}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 12,
            name: 'Article12',
            dateOfPublish: '2019, 1, 13, 13, 0',
            path: '/news/article12',
            title: 'Название статьи 12.',
            img: `${Img12}`,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
    ];

    render() {
        return (
            <React.Fragment>
                <ArticlesTemplate articles={this.articlesData} closeArticlePath='/news' />
            </React.Fragment>
        );
    }
}