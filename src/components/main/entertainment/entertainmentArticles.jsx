import React from 'react';
import {Route} from "react-router-dom";
import CloseArticleBtn from "../closeArticleBtn";

import styled from 'styled-components';
import singleArticle from "../Article.module.css";

import Img1 from "../../../img/Entt1.jpg";
import Img2 from "../../../img/Entt2.jpg";
import Img3 from "../../../img/Entt3.jpg";
import Img4 from "../../../img/Entt4.jpg";
import Img5 from "../../../img/Entt5.jpg";
import Img6 from "../../../img/Entt6.jpg";
import Img7 from "../../../img/Entt7.jpg";
import Img8 from "../../../img/Entt8.jpg";
import Img9 from "../../../img/Entt9.jpg";

const articles = [
    {
        id: 1,
        name: 'Article',
        path: '/entertainment/article1',
        title: 'Название статьи 1.',
        img: `${Img1}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
        secondH2: 'Абзац 2',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!',
        thirdH2: 'Абзац 3',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',

    },
    {
        id: 2,
        name: 'Article2',
        path: '/entertainment/article2',
        title: 'Название статьи 2.',
        img: `${Img2}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id: 3,
        name: 'Article3',
        path: '/entertainment/article3',
        title: 'Название статьи 3.',
        img: `${Img3}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
        secondH2: 'Абзац 2',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nobis!',
        thirdH2: 'Абзац 3',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',

    },
    {
        id: 4,
        name: 'Article4',
        path: '/entertainment/article4',
        title: 'Название статьи 4.',
        img: `${Img4}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id: 5,
        name: 'Article5',
        path: '/entertainment/article5',
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
        path: '/entertainment/article6',
        title: 'Название статьи 6.',
        img: `${Img6}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
        thirdH2: 'Абзац 3',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',

    },
    {
        id: 7,
        name: 'Article7',
        path: '/entertainment/article7',
        title: 'Название статьи 7.',
        img: `${Img7}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
        thirdH2: 'Абзац 3',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',

    },
    {
        id: 8,
        name: 'Article8',
        path: '/entertainment/article8',
        title: 'Название статьи 8.',
        img: `${Img8}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',
        thirdH2: 'Абзац 3',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.',

    },
    {
        id: 9,
        name: 'Article9',
        path: '/entertainment/article9',
        title: 'Название статьи 9.',
        img: `${Img9}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        firstH2: 'Абзац 1',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    }
];

const ArticleTemplate = articles.map((article, id) => {

    const PictureArticle = styled.div`
        background-image: url(${article.img});
        `;

    const component = () => {
        return (
            <article className={singleArticle.mainArticle}>
                <a id='top' className={singleArticle.topScroll}/>
                <CloseArticleBtn path='/entertainment'/>

                <h1> {article.title} </h1>
                <PictureArticle className={singleArticle.picArticle}/>
                <p> {article.description} </p>

                <h2> {article.firstH2} </h2>
                <p> {article.text1} </p>

                <h2> {article.secondH2} </h2>
                <p> {article.text2} </p>

                <h2> {article.thirdH2} </h2>
                <p> {article.text3} </p>
            </article>
        )
    };

    return (
        <Route exact path={article.path} key={id} component={component}/>
    )
});

const EntertainmentArticles = () => {
    return (
        <React.Fragment>
            {ArticleTemplate}
        </React.Fragment>
    )
};

export default EntertainmentArticles;