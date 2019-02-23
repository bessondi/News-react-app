import React, {Component} from 'react';
import ArticlesTemplate from "../articles/articlesTemplate";

import placesImg1 from "../../../img/City1.jpg";
import placesImg2 from "../../../img/City2.jpg";
import placesImg3 from "../../../img/City3.jpg";
import placesImg4 from "../../../img/City4.jpg";
import placesImg5 from "../../../img/City5.jpg";
import placesImg6 from "../../../img/City6.jpg";

export default class PlacesArticles extends Component {

    articlesData = [
        {
            id: 1,
            name: 'Article',
            path: '/places/article1',
            dateOfPublish: '2019, 2, 5, 12, 5',
            title: 'Название статьи 1.',
            img: placesImg1,
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
            path: '/places/article2',
            dateOfPublish: '2019, 2, 1, 12, 5',
            title: 'Название статьи 2.',
            img: placesImg2,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 3,
            name: 'Article3',
            path: '/places/article3',
            dateOfPublish: '2019, 1, 1, 12, 5',
            title: 'Название статьи 3.',
            img: placesImg3,
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
            path: '/places/article4',
            dateOfPublish: '2019, 0, 1, 12, 5',
            title: 'Название статьи 4.',
            img: placesImg4,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        },
        {
            id: 5,
            name: 'Article5',
            path: '/places/article5',
            dateOfPublish: '2019, 0, 5, 12, 5',
            title: 'Название статьи 5.',
            img: placesImg5,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!'
        },
        {
            id: 6,
            name: 'Article6',
            path: '/places/article6',
            dateOfPublish: '2018, 1, 1, 12, 5',
            title: 'Название статьи 6.',
            img: placesImg6,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Абзац 1',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
            secondH2: 'Абзац 2',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
        }
    ];

    render() {
        return (
            <React.Fragment>
                <ArticlesTemplate articles={this.articlesData} closeArticlePath='/places' />
            </React.Fragment>
        );
    }
}