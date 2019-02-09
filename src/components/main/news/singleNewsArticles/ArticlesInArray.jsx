import React from 'react';
import styled from 'styled-components';
import singleArticle from "./newsArticle.module.css";
import CloseBtn from "./closeBtn";
import {Route} from "react-router-dom";

import SPbImg1 from "../../../../img/SPb.jpg";
import SPbImg2 from "../../../../img/SPb1.jpg";
import SPbImg3 from "../../../../img/SPb3.jpg";
import SPbImg4 from "../../../../img/SPb4.jpg";
import SPbImg5 from "../../../../img/SPb5.jpg";
import SPbImg6 from "../../../../img/SPb6.jpg";

const articles = [
    {
        id : 1,
        name : 'Article',
        linkTo : '/news/article1',
        title: 'Название статьи 1.',
        img : `${SPbImg1}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id : 2,
        name : 'Article2',
        linkTo : '/news/article2',
        title: 'Название статьи 2.',
        img : `${SPbImg2}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id : 3,
        name : 'Article3',
        linkTo : '/news/article3',
        title: 'Название статьи 3.',
        img : `${SPbImg3}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id : 4,
        name : 'Article4',
        linkTo : '/news/article4',
        title: 'Название статьи 4.',
        img : `${SPbImg4}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id : 5,
        name : 'Article5',
        linkTo : '/news/article5',
        title: 'Название статьи 5.',
        img : `${SPbImg5}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    },
    {
        id : 6,
        name : 'Article6',
        linkTo : '/news/article6',
        title: 'Название статьи 6.',
        img : `${SPbImg6}`,
        description: 'Описание. Lorem ipsum dolor sit amet.',
        h2: 'Абзац 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.'
    }
];

const ArticleTemplate = articles.map( (article, id) => {
    const PictureArticle = styled.div`
                    background-image: url(${article.img});
                    `;
    return (
        <article key={id} className={singleArticle.mainArticle}>
            <a id="top" className={singleArticle.topScroll}></a>
            <CloseBtn/>

            <h1> {article.title} </h1>
            <PictureArticle className={singleArticle.picArticle}/>
            <p> {article.description} </p>
            <h2> {article.h2} </h2>
            <p> {article.text} </p>
        </article>
    )
});

// const routes = [
//     {
//         id: 1,
//         linkTo : '/news/article1',
//         component: ArticleTemplate
//     },
//     {
//         id: 2,
//         linkTo : '/news/article2',
//         component: ArticleTemplate
//     },
//     {
//         id: 3,
//         linkTo : '/news/article3',
//         component: ArticleTemplate
//     },
//     {
//         id: 4,
//         linkTo : '/news/article4',
//         component: ArticleTemplate
//     },
//     {
//         id: 5,
//         linkTo : '/news/article5',
//         component: ArticleTemplate
//     },
//     {
//         id: 6,
//         linkTo : '/news/article6',
//         component: ArticleTemplate
//     }
// ];

// const routeComponents = routes.map( (route, id) => <Route key={id} path={route.linkTo} component={route.component} /> );
// const routeComponents = articles.map( (route, id) => <Route key={id} path={route.linkTo} component={ArticleTemplate} /> );

const ArticlesInArray = () => {
    return (
        <React.Fragment>
           {ArticleTemplate}
        </React.Fragment>
    )
};

export default ArticlesInArray;