import React from 'react';
import {Route} from "react-router-dom";

import Article1 from "./newsArticle1";
import Article2 from "./newsArticle2";
import Article3 from "./newsArticle3";
import Article4 from "./newsArticle4";
import Article5 from "./newsArticle5";
import Article6 from "./newsArticle6";

const AllNewsArticles = () => {
    return (
        <React.Fragment>
            <Route path='/news/article1' component={Article1}/>
            <Route path='/news/article2' component={Article2}/>
            <Route path='/news/article3' component={Article3}/>
            <Route path='/news/article4' component={Article4}/>
            <Route path='/news/article5' component={Article5}/>
            <Route path='/news/article6' component={Article6}/>
        </React.Fragment>
    )
};

export default AllNewsArticles;