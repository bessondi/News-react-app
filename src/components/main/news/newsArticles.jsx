import React, {Component} from 'react';
import {Route} from "react-router-dom";
import CloseArticleBtn from "../closeArticleBtn";
import DiffPublishDates from "../DiffPublishDates";

import styled from 'styled-components';
import singleArticle from "../Article.module.css";

import Img1 from "../../../img/SPb1.jpg";
import Img2 from "../../../img/SPb2.jpg";
import Img3 from "../../../img/SPb3.jpg";
import Img4 from "../../../img/SPb4.jpg";
import Img5 from "../../../img/SPb5.jpg";
import Img6 from "../../../img/SPb6.jpg";
// import Img7 from "../../../img/SPb7.jpg";
// import Img8 from "../../../img/SPb8.jpg";
// import Img9 from "../../../img/SPb9.jpg";
// import Img10 from "../../../img/SPb10.jpg";

const articles = [
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
    // {
    //     id: 7,
    //     name: 'Article7',
    //     dateOfPublish: '2019, 1, 13, 13, 0',
    //     path: '/news/article7',
    //     title: 'Название статьи 7.',
    //     img: `${Img7}`,
    //     description: 'Описание. Lorem ipsum dolor sit amet.',
    //     firstH2: 'Абзац 1',
    //     text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
    //     secondH2: 'Абзац 2',
    //     text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    // },
    // {
    //     id: 8,
    //     name: 'Article8',
    //     dateOfPublish: '2019, 1, 13, 13, 0',
    //     path: '/news/article8',
    //     title: 'Название статьи 8.',
    //     img: `${Img8}`,
    //     description: 'Описание. Lorem ipsum dolor sit amet.',
    //     firstH2: 'Абзац 1',
    //     text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
    //     secondH2: 'Абзац 2',
    //     text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    // },
    // {
    //     id: 9,
    //     name: 'Article9',
    //     dateOfPublish: '2019, 1, 13, 13, 0',
    //     path: '/news/article9',
    //     title: 'Название статьи 9.',
    //     img: `${Img9}`,
    //     description: 'Описание. Lorem ipsum dolor sit amet.',
    //     firstH2: 'Абзац 1',
    //     text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
    //     secondH2: 'Абзац 2',
    //     text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    // },
    // {
    //     id: 10,
    //     name: 'Article10',
    //     dateOfPublish: '2019, 1, 13, 13, 0',
    //     path: '/news/article10',
    //     title: 'Название статьи 10.',
    //     img: `${Img10}`,
    //     description: 'Описание. Lorem ipsum dolor sit amet.',
    //     firstH2: 'Абзац 1',
    //     text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
    //     secondH2: 'Абзац 2',
    //     text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    // },
];

export default class NewsArticles extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {

        const ArticleTemplate = articles.map((article, id) => {

            const PictureArticle = styled.div`
        background-image: url(${article.img});
        `;

            const component = () => {
                return (
                    <article className={singleArticle.mainArticle}>
                        <CloseArticleBtn path='/news'/>

                        <h1> {article.title} </h1>
                        <PictureArticle className={singleArticle.picArticle}/>
                        <p> {article.description} </p>

                        <h2> {article.firstH2} </h2>
                        <p> {article.text1} </p>

                        <h2> {article.secondH2} </h2>
                        <p> {article.text2} </p>

                        <h2> {article.thirdH2} </h2>
                        <p> {article.text3} </p>

                        <br/>
                        <time className={singleArticle.publish}>
                            <span>Опубликовано <DiffPublishDates date={article.dateOfPublish} /></span>
                        </time>
                    </article>
                )
            };

            return (
                <Route exact path={article.path} key={id} component={component}/>
            )
        });

        return (
            <React.Fragment>
                {ArticleTemplate}
            </React.Fragment>
        );
    }
}