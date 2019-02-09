import React from 'react';
import {Route} from "react-router-dom";

// refactor this
import Article1 from "./newsArticle1";
import Article2 from "./newsArticle2";
import Article3 from "./newsArticle3";
import Article4 from "./newsArticle4";
import Article5 from "./newsArticle5";
import Article6 from "./newsArticle6";

// import ArticlesInArray from "./ArticlesInArray";

const routes = [
    {
        id: 1,
        linkTo : '/news/article1',
        component: Article1
    },
    {
        id: 2,
        linkTo : '/news/article2',
        component: Article2
    },
    {
        id: 3,
        linkTo : '/news/article3',
        component: Article3
    },
    {
        id: 4,
        linkTo : '/news/article4',
        component: Article4
    },
    {
        id: 5,
        linkTo : '/news/article5',
        component: Article5
    },
    {
        id: 6,
        linkTo : '/news/article6',
        component: Article6
    }
];

const routeComponents = routes.map( (route, id) => <Route key={id} path={route.linkTo} component={route.component} /> );

// условие для показа одной новости в зависимости от пути
// const showElement = (path) => {
//     if (path == './newsArticle1') {
//         return path;
//     }
// };

const AllNewsRoutes = () => {
    return (
        <React.Fragment>
            {/*<ArticlesInArray/>*/}
            {routeComponents}
        </React.Fragment>
    )
};

export default AllNewsRoutes;